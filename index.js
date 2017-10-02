const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const session = require("koa-session2")
const {
  member,
  admin
} = require('./routers')

const app = new Koa()
app.use(bodyParser())
app.use(views(path.resolve(__dirname, './views')))
app.use(static(path.resolve(__dirname, './static')))

app.use(member.routes())
app.use(admin.routes())

const server = app.listen(8080, () => console.log('The server is starting at port 8080'))