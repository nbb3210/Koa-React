const {
  find,
  findById,
  findOneAndUpdate,
  create,
  remove
} = require('../controllers')
const admin = require('koa-router')({
  prefix: '/admin',
});

admin.get('/', async ctx => {
    if (ctx.session.memberId) {
      const member = await findById(ctx.session.memberId, 'member')
      if (member.flag === 0) {
        await ctx.render('admin');
      } else {
        await ctx.render('loginAdmin');
      }
    } else {
      await ctx.render('loginAdmin');
    }
  })
  .post('/login', async ctx => {
    const members = await find(ctx.request.body, 'member')
    if (members.length === 1 && members[0].flag === 0) {
      ctx.session.memberId = members[0]._id
      ctx.body = members[0]
    } else {
      ctx.body = {
        err: '错误的账号或密码'
      }
    }
  })

module.exports = admin;