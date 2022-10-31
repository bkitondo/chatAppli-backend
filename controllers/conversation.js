// const Message = require('../models/messageModel')
const Conversation = require('../models/conversationModel')

exports.findOrCreate = (req,res)=>{
    Conversation.findOne({$and:[
        { $or: [{ from: req.params.from }, { to: req.params.from }]},
        { $or: [{ from: req.params.to }, { to: req.params.to }] }
    ]})

    .then( (conversation) => {
        if(!conversation){
            const conversation =   new Conversation({
                from : req.params.from,
                to : req.params.to
            })
            conversation.save()
            .then(conversation => res.status(201).json({message: "create", conversation}))
        }
        else{
            res.status(200).json({
                message : "find",
                conversation
            })
        } 
    })
    .catch((err) => {
        res.status(500).json(err)
    })
}