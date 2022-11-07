const bcrypt = require('bcrypt')
const User = require('../models/userModel')
const jwt = require('jwt-simple')

exports.createUser = (request, response)=>{
    bcrypt.hash(request.body.password, 10)
    .then(hash => {
        const user = new User({
            userName: request.body.userName,
            email: request.body.email,
            password : hash        
        })
        user.save()
        .then(()=>{
            response.status(201).json(`${user.userName} est crée avec succés`)
        })
        .catch(err => response.status(409).json({err}))
    })
    .catch(err => response.status(500).json({err}))
}

exports.getAllUser = (request, response)=>{
    User.find({_id : {$ne :request.params.id}})
    .then(users=>{
        response.status(200).json(users)
    })
    .catch(err=>{response.status(400).json({err})})
}

exports.signIn = (request, response)=>{
    User.findOne({email : request.body.email})
    .then(user =>{
        if(!user){response.status(401).json({
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
            bcrypt.compare(request.body.password, user.password)
            .then(valid =>{
                if(!valid){response.status(401).json({
                    message: 'email ou mot de passe incorrect'
                })}
                else{
                    delete user.password
                    response.status(200).json({
                        userId: user._id,
                        token : `Bearer ${token}`,
                        userName : user.userName
                    })
                }
            })
            .catch(err => response.status(400).json({err}))
        }
    })
}