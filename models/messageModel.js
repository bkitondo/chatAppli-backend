const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
        message : {
            type: String,
            required : true,
            min : 1
        },
        users : {
            type : Array
        },
        sender : {
            type : mongoose.Schema.Types.ObjectId,
            Reference : "User",
            required : true
        }
    }
)

module.exports = mongoose.model("Messages", messageSchema)