const {
  find,
  findById,
  findOneAndUpdate,
  create,
  findOneAndRemove
} = require('../controllers')
const wrapIo = require('../communication/websocket')
const member = require('koa-router')();

member.get('/', async ctx => {
    if (ctx.session.memberId) {
      const member = await findById(ctx.session.memberId, 'member')
      if (member) {
        await ctx.render('member');
      } else {
        await ctx.render('login');
      }
    } else {
      await ctx.render('login');
    }
  })
  .get('/logout', async ctx => {
    ctx.session.memberId = null;
    ctx.redirect('/');
  })
  .post('/login', async ctx => {
    const members = await find(ctx.request.body, 'member')
    if (members.length === 1) {
      ctx.session.memberId = members[0]._id
      ctx.body = members[0]
    } else {
      ctx.body = {
        err: '错误的账号或密码！'
      }
    }
  })
  .post('/register', async ctx => {
    const {
      studentId
    } = ctx.request.body
    const members = await find({
      studentId
    }, 'member')
    if (members.length === 0) {
      const member = await create(ctx.request.body, 'member')
      ctx.session.memberId = member._id
      ctx.body = member
    } else {
      ctx.body = {
        err: '一样的学号！'
      }
    }
  })
  .get('/member', async ctx => ctx.body = await findById(ctx.session.memberId, 'member'))
  .get('/device', async ctx => ctx.body = await find({}, 'device'))
  .get('/record', async ctx => ctx.body = await find({
    memberId: ctx.session.memberId
  }, 'record', -1))
  .post('/record', async ctx => {
    const application = await create(ctx.request.body, 'application');
    const {
      memberId
    } = ctx.session
    ctx.body = await create({
      application,
      memberId,
      applicationId: application._id
    }, 'record')
    // 提出申请，告知管理员
    wrapIo.io.sockets.to(wrapIo.adminSocket).emit('PUSH_APPLICATION', application)
  })
  .del('/record/:applicationId', async ctx => {
    // 撤销申请
    const applicationId = ctx.request.url.split('/')[2]
    const record = await find({
      applicationId
    }, 'record')
    if (record.length === 1) {
      const application = await findOneAndRemove({
        _id: applicationId
      }, 'application')
      ctx.body = await findOneAndRemove({
        applicationId
      }, 'record')
      // 撤回申请，告知管理员
      wrapIo.io.sockets.to(wrapIo.adminSocket).emit('POP_APPLICATION', application)
      wrapIo.io.sockets.to(wrapIo.adminSocket).emit('REMOVE_RECORD', record[0])
    } else {
      ctx.body = {
        err: '申请已被处理，无法撤回！'
      }
    }
  })

module.exports = member;

// 18510598187 沈聪