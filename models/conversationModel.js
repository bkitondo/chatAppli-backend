 const mongoose = require('mongoose')

 const conversationSchema = mongoose.Schema({
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
      },
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
      }
     
 })
 module.exports = mongoose.model("Conversation", conversationSchema)