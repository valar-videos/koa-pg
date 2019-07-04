const { migrate } = require('postgres-migrations')
const config = require('configuration')

exports.run = async function ({ user, password = '', host, port, database }) {
  const nodePath = config.get('NODE_PATH')
  const dir = `${nodePath}/../migrations`
  return migrate({ user, password, host, port: parseInt(port), database }, dir)
}
