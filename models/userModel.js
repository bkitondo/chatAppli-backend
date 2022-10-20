const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
   userName:{
    type:String,
    required : true,
    min : 4,
    max: 20
   },
   email :{
    type : String,
    required: true,
    unique : true,
    min: 14,
    max : 30
   },
   password :{
    type: String,
    required: true,
    min: 6,
    max : 10
   }
})

userSchema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', userSchema)

