const mongoose = require('mongoose')

const conversationSchema = mongoose.Schema(
    {
      message: {
                type: String, 
                required: true ,
                min : 2
      },
      users: Array,
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("Messages", conversationSchema);