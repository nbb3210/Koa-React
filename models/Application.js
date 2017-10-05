const mongoose = require('mongoose')

const ApplicationSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  devices: {
    type: [mongoose.Schema.Types.Mixed]
  },
  days: {
    type: [String]
  },
  reason: {
    type: String,
    default: ''
  },
  feedback: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: 0 // 0:提交申请 1:同意申请 2:结束申请，归还设备 -1:拒绝申请 
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

module.exports = mongoose.model('ApplicationSchema', ApplicationSchema)