const Router = require('koa-router')
const member = new Router()

member.get('/', async(ctx) => {
  await ctx.render('login')
})

member.get('/member', async(ctx) => {
  await ctx.render('member')
})

module.exports = member