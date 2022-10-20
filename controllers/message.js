const Message = require('../models/messageModel')

// exports.addMessage = (req, res, next) =>{
//     const {from, to, message} = req.body
//     const newMessage =  new Message({
//         message : {
//             text: req.body.message
//         }
//         // ,
//         // users : [
//         //     from,
//         //     to
//         // ],
//         // sender : from
//     })
//     newMessage.save()

//     if(data) return res.json({
//         mgs : 'message envoyé avec succes'
//     })
//     else return res.json({
//         mgs : 'message non envoyé'
//     })
// }

exports.addMessage = (req, res, next) => {

        const {from,to,message} = req.body;
        const msg = new Message({
            message
            ,users: [
                from,
                to
            ],
            sender:from,
        })
        msg.save()
        .then((data)=>{
            res.status(201).json(`${data} est crée avec succés`)
        })
        .catch(err=> console.log(err))      
};

exports.getMessage = (req, res, next)=>{
    Message.find()
    .then(msg=>{
        res.status(200).json(msg)
    })
    .catch(err=>{res.status(400).json({err})})
}


module.exports.getAllMessage = async (req, res, next) => {
    try {
        const {from,to} = req.body;
        const messages = await Message.find({
            users:{
                All: [from,to],
            },
        }).sort({ updatedAt: 1 });

        const projectMessages = messages.map((msg)=>{
            return{
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });
        res.json(projectMessages);
    } catch (error) {
        next(error);
    }
};