const Koa = require('koa')
const router = require('routing')
const ResponseTime = require('koa-response-time')
const Morgan = require('koa-morgan')
const db = require('database')

const app = new Koa()

app.use(ResponseTime())
app.use(Morgan('combined'))
app.use(router.routes())

exports.start = async function () {
  try {
    await db.start()
    console.log('Database connected')
    this.server = await app.listen(3000)
    console.log('Server listening on port 3000')
  } catch (error) {
    console.log(error)
  }
}

exports.close = async function () {
  await this.server.close()
  await db.close()
}
