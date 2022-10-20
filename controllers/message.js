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

exports.addMessage = async (req, res, next) => {
    try {
        const {from,to,message} = req.body;
        const data = await Message.create({
            message:{
                text: message
            },
            users: [
                from,
                to
            ],
            sender:from,
        });

        if(data) return res.json({
            msg: "Message added successfully!"
        });
        return res.json({ 
            msg: "Failed to add message to DB"
        });

    } catch (err) {
        next(err);
    }
};