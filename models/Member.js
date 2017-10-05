const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  nickname: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  studentId: {
    type: String,
    default: ''
  },
  institute: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  flag: {
    type: Number,
    default: 1 // 0 代表管理员 1 代表会员
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

module.exports = mongoose.model('MemberSchema', MemberSchema)