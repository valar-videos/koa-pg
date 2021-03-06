const Router = require('koa-router')
const lists = require('api/lists/routes')

const router = Router()
router.get('/', async ctx => { ctx.status = 200 })

router.use('/lists', lists.routes())

module.exports = router
