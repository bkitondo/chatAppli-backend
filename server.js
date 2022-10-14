const http = require('http')
const app = require('./app')
const server  = http.createServer(app)
const port = process.env.PORT || 8080
require('./connexion/connexion')




server.listen(port, console.log(`server is starting port ${port}`))






