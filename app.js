const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const cors = require('cors')

app.use(express.json())
app.use(cors())


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
//   });

  app.use('/api/auth', userRoutes)


module.exports = app 