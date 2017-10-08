require('dotenv').config()
const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session2');
const favicon = require('koa-favicon');
const mongoose = require('mongoose');
const warpIo = require('./communication/websocket')
const {
  member,
  admin,
} = require('./routers');

mongoose.connect(process.env.DB_URL, { useMongoClient: true, promiseLibrary: global.Promise })

const app = new Koa();
app.use(session());
app.use(views(path.resolve(__dirname, './views')));
app.use(static(path.resolve(__dirname, './static')));
app.use(favicon(path.resolve(__dirname, './static/favicon.ico')));
app.use(bodyParser());
app.use(member.routes());
app.use(admin.routes());
const server = app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`))
warpIo.init(server)