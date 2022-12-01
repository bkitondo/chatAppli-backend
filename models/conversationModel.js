const mongoose = require('mongoose')

const conversationSchema = mongoose.Schema({
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})
module.exports = mongoose.model('Conversation', conversationSchema)
