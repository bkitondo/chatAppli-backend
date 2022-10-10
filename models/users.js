const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    userPassword: {
        type : String,
        required:true,
        unique:true
    }
})
user.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)