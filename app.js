const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')
const cors = require('cors')
// const io = require('socket.io')
const passport = require("passport")
const { session } = require('passport')
require('./middlewares/auth')

app.use(express.json())
app.use(cors())
app.use(passport.initialize())

exports.restrictor = passport.Authenticator('jwt', {session:false})
  
app.use('/api/auth', userRoutes)
app.use('/api/message',messageRoutes)

module.exports = {app}