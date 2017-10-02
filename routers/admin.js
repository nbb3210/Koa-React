const Router = require('koa-router')
const admin = new Router({
  prefix: '/admin'
})

admin.get('/', async(ctx) => {
  await ctx.render('admin')
})

admin.get('/main', async(ctx) => {
  await ctx.render('loginAdmin')
})

module.exports = admin