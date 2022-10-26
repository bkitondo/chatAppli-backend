require('dotenv').config()
const http = require('http')
const app = require('./app')
require('./connexion/connexion')
const port = process.env.port || 8080

http.createServer(app.app)
.listen(port, console.log(`server is starting port ${port}`))






