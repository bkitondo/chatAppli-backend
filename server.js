const http = require('http')
const app = require('./app')
require('./connexion/connexion')
const port = process.env.PORT || 8080

http.createServer(app)
.listen(port, console.log(`server is starting port ${port}`))






