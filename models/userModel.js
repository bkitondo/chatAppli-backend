const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const userSchema = mongoose.Schema({
   userName:{
    type:String,
    required : true,
    min: 4,
    max: 20
   },
   phone :{
    type : Number,
    required: true,
    unique : true
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

