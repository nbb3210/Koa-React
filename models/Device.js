const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  order: {
    type: Number,
    default: 0 // 设备编号
  },
  status: {
    type: Number,
    default: 0 // 0代表该设备可借，1代表该设备借出，2代表该设备维护
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

module.exports = mongoose.model('DeviceSchema', DeviceSchema)