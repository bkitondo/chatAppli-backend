const Message = require('../models/messageModel')

exports.addMessage = (req, res, next) => {
    const { conversationId, from, to, message } = req.body;
    const msg = new Message({
        conversationId,
        message,
        from,
        to
    })
    msg.save()
        .then((data) => {
            res.status(201).json(`${data} est crée avec succés`)
        })
        .catch(err => console.log(err))
};

exports.getMessage = (req, res, next) => {
    const conversationId = req.params.conversationId
    // console.log("conversationId ", conversationId)
    // if (!conversationId || conversationId === undefined) {
    //     return res.status(400).json('conversation Id')
    // }
    Message.find({ conversationId })
        .then((conversation) => {
            res.status(200).json(conversation)
        })
        .catch((err) => { throw err })
}
