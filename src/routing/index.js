const Router = require('koa-router')
const database = require('database')

const router = Router()
router.get('/', async ctx => { ctx.status = 200 })

router.get('/test', async ctx => {
  ctx.body = await database.query('SELECT 1 + 1 AS result')
    .then(c => c.rows[0].result)
})

module.exports = router
