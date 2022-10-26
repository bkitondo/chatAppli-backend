const Message = require('../models/messageModel')

exports.addMessage = (req, res, next) => {

        const {conversatioInd,from,to,message} = req.body;
        const msg = new Message({
            conversatioInd,
            message
        })
        msg.save()
        .then((data)=>{
            res.status(201).json(`${data} est crée avec succés`)
        })
        .catch(err=> console.log(err))      
};


exports.getMessage = (req, res, next)=>{
    // const sender = req.params.from
    // console.log(`sender  ${sender}`);
    const conversatioInd = req.params.conversatioInd
    Message.find({conversatioInd})
    .then(msg=>{
        res.status(200).json(msg)
    })
    .catch(err=>{res.status(400).json({err})})
}


exports.getAllMessage = async (req, res, next) => {
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
}