const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
      conversationId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: true,
      },
      message: {
                type: String, 
                min : 2
      },
      media: {
        type: String,
      },
      to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Messages", messageSchema);