const socket = require('socket.io')

class WrapIo {
  constructor() {
    this.io = {}
    this.clientMap = new Map()
    this.adminSocket = ''
  }

  init(server) {
    this.io = socket(server)
    this.io.on('connection', (socket) => {
      socket.on('memberOnline', (memberId) => {
        console.log('memberOnline:' + socket.id)
        this.clientMap.set(memberId, socket.id)
      })

      socket.on('adminOnline', () => {
        console.log('adminOnline:' + socket.id)
        this.adminSocket = socket.id
      })
    })
  }
}

module.exports = new WrapIo()