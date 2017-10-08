const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
  memberId: {
    type: String,
    default: ''
  },
  applicationId: {
    type: String,
    default: ''
  },
  application: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  status: {
    type: Number,
    default: 0 // 0:提交申请 1:同意申请 2:结束申请，归还设备 -1:拒绝申请 5:发布通知 6:维修设备 7:解除维修状态
  },
  notice: { // 用于给出通知
    type: String,
    default: ''
  },
  devices: { // 用于维修设备
    type: [mongoose.Schema.Types.Mixed]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('RecordSchema', RecordSchema)