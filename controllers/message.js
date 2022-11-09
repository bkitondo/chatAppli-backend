const Message = require('../models/messageModel')

exports.addMessage = (request, response) => {
    const { conversationId, from, to, message, media } = request.body
    const msg = new Message({
        conversationId,
        message,
        media,
        from,
        to
    })
    msg.save()
        .then((data) => {
            response.status(201).json(`${data} est crée avec succés`)
        })
        .catch(err => console.log(err))
}

exports.getMessage = (request, response) => {
    const conversationId = request.params.conversationId
    Message.find({ conversationId })
        .then((conversation) => {
            response.status(200).json(conversation)
        })
        .catch((err) => { throw err })
}
