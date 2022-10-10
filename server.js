const http = require('http')
const app = require('./app')
const server= http.createServer(app)
// const socket = require('socket.io')

const port = (process.env.port||8080)
server.listen(port,(err)=>{
    if(err) throw err;
    console.log(`le serveur ecoute le port ${port}`);
})