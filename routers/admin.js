const {
  find,
  findById,
  findOneAndUpdate,
  create,
} = require('../controllers')
const wrapIo = require('../communication/websocket')
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
  .get('/logout', async ctx => {
    ctx.session.memberId = null;
    ctx.redirect('/admin');
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
  .get('/device', async ctx => ctx.body = await find({}, 'device'))
  .get('/member', async ctx => ctx.body = await find({}, 'member'))
  .get('/record', async ctx => ctx.body = await find({}, 'record',-1))
  .get('/application', async ctx => ctx.body = await find({}, 'application'))
  // 处理申请 同意申请 拒绝申请 结束申请
  .put('/application', async ctx => {
    const application = await findOneAndUpdate(ctx.request.body, 'application')
    const {
      status,
      devices
    } = application
    const memberId = application.member._id
    const record = await create({
      application,
      memberId,
      applicationId: application._id,
      status
    }, 'record')
    // 告知处理结果
    const socketId = wrapIo.clientMap.get(memberId)
    wrapIo.io.sockets.to(socketId).emit('ADD_RECORD', record)

    let updatedDeices = []
    if (status === 1) {
      updatedDeices = await changeDevices(devices, 1)
    }
    if (status === 2) {
      updatedDeices = await changeDevices(devices, 0)
    }

    ctx.body = application
  })
  // 发出通知
  .post('/record', async ctx => {
    const record = await create(ctx.request.body, 'record')
    ctx.body = record
    // 告之众人
    wrapIo.io.sockets.emit('ADD_REOCRD', record)
  })
  // 切换维修设备状态
  .put('/device', async ctx => {
    const {
      moveKeys,
      direction
    } = ctx.request.body
    const params = {
      '_id': {
        $in: moveKeys
      }
    }
    const devices = await find(params, 'device')
    const updatedDeices = await changeDevices(devices, (direction === 'left') ? 0 : 2)
    ctx.body = await create({
      devices: updatedDeices,
      status:(direction === 'left') ? 7 : 6
    }, 'record')
  })

// 告之众人
const changeDevices = async(devices, status) => {
  let data = []
  for (let d of devices) {
    d.status = status
    let updated = await findOneAndUpdate(d, 'device')
    data.push(updated)
  }
  wrapIo.io.sockets.emit('UPDATE_DEVICES', data)
  return data
}

module.exports = admin;