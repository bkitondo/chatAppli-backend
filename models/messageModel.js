const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
      conversationId : {type : mongoose.Schema.Types.ObjectId, ref: "Conversation"},
      message: {
                type: String, 
                required: true ,
                min : 2
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