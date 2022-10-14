const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.createUser = (req, res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            userName: req.body.userName,
            phone: req.body.phone,
            password : hash        
        })
        
        user.save()
        .then(()=>{
            res.status(201).json({message: "utilisateur crée"})
        })
        .catch(err => res.status(400).json({err}))
    })
    .catch(err => res.status(400).json({err}))
}

exports.getAllUser = (req, res, next)=>{
    User.find()
    .then(user=>{
        res.status(200).json(`user ${user}`)
    })
    .catch(err=>{res.status(400).json({err})})

}

exports.singIn = ()=>{

}