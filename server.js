require('dotenv').config()
require('./connexion/connexion')

const http = require('http')
const app = require('./app')
const server = http.createServer(app.app)

const {Server} = require('socket.io')
const cors = require("cors")
const io = new Server(server, {
    cors : {
        origin:"http://localhost:3000",
        methods: ["GET","POST"]
    }
})
const port = process.env.port || 8080

io.on("connection", (socket)=>{
    console.log(`a user connected ${socket.id}`);
    socket.on("send_message", (data)=>{
        socket.broadcast.emit("receive_message", data)
        console.log(data);
    })
})

server.listen(port, console.log(`server is starting port ${port}`))






