const database = require('database')

const timestamps = `
(inserted_at::timestamp at time zone 'UTC') as inserted_at,
(updated_at::timestamp at time zone 'UTC') as updated_at
`

exports.create = async function () {
  const now = new Date()
  return database.queryOne(
    `
    INSERT INTO todo_list (inserted_at, updated_at)
    VALUES ($1, $2) RETURNING
    id,
    ${timestamps}
    `,
    [now.toISOString(), now.toISOString()]
  )
}

exports.getById = async function (id) {
  return database.queryOne(
    `SELECT id,
    ${timestamps}
    FROM todo_list WHERE id = $1`, [id]
  )
}
