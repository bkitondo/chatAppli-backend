require('dotenv').config()
require('./connexion/connexion')

const http = require('http')
const app = require('./app')
const server = http.createServer(app.app)
const port = process.env.port || 8080
const {Server} = require('socket.io')
const cors = require("cors")
const io = new Server(server, {
  cors : {
    origin:"http://localhost:3000",
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
    console.log("userId", userId , "socket.id", socket.id)
  })     

  console.log("users", users )
  socket.on("send-msg", (data) => {
    console.log("voici le data", data)
    console.log("users send ", users)
    const user = users.find(user => user.userId === data.receiver)
    console.log("user socket reussi", user )
    if(user){
      io.to(user.socketId).emit("msg-received",data)
    }
  })
})
server.listen(port, console.log(`server is starting port ${port}`))
