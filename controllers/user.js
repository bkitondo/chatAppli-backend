const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jwt-simple')

exports.createUser = (req, res,next)=>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            userName: req.body.userName,
            email: req.body.email,
            password : hash        
        })
        user.save()
        .then(()=>{
            res.status(201).json(`${user.userName} est crée avec succés`)
        })
        .catch(err => res.status(409).json({err}))
    })
    .catch(err => res.status(500).json({err}))
}

exports.getAllUser = (req, res, next)=>{
    User.find()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{res.status(400).json({err})})
}

exports.signIn = (req, res)=>{
    User.findOne({email : req.body.email})
    .then(user =>{
        if(!user){res.status(401).json({
            message: 'email ou mot de passe incorrect'
        })}
        else{
            const payload = {
                id:user._id,
                nom : user.userName,
                email : user.email,
                expire : 24*60*60*1000
            }
            const token = jwt.encode(payload, '|Bk28051996|')
            bcrypt.compare(req.body.password, user.password)
            .then(valid =>{
                if(!valid){res.status(401).json({
                    message: 'email ou mot de passe incorrect'
                })}
                else{
                    delete user.password
                    res.status(200).json({
                        userId: user._id,
                        token : `Bearer ${token}`,
                        userName : user.userName
                    })
                }
            })
            .catch(err => res.status(400).json({err}))
        }
    })
}