require('dotenv').config()
require('./connexion/mongoose')

const http = require('http')
const app = require('./app')
const server = http.createServer(app.app)
const port = process.env.PORT
const {Server} = require('socket.io')
const io = new Server(server, {
  cors : {
    origin:process.env.URL_FRONTEND,
    methods: ["GET","POST"]
  }
})
let users = []
io.on("connection", (socket) => {
  socket.on("add-user", (userId) => {
    let socketId = socket.id
    if (users.length < 1) {
      users.push({
        userId,
        socketId 
      }) 
    }
    else {
      if(!users.some((user) => user.userId === userId)){
        users.push({
          userId,
          socketId 
        })
      }
      else {
        users.map(user => {
          if (user.userId === userId) {
            user.socketId = socket.id
          }
        })
      }
    }
  })     
  socket.on("send-msg", (data) => {
    const user = users.find(user => user.userId === data.receiver)
    if(user){
      io.to(user.socketId).emit("msg-received",data)
    }
  })
})
server.listen(port, console.log(`server is starting port ${port}`))
