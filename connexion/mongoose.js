const mongoose = require('mongoose')
require('dotenv').config()

exports.db_connect = mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.mzmodyv.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log('Connected in database !'))
  .catch(() => console.log('Not connected in database!'))
