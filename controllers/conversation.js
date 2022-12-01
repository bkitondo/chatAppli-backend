const Conversation = require('../models/conversationModel')

exports.findOrCreate = (request, response) => {
  Conversation.findOne({
    $and: [
      {
        $or: [
          { from: request.params.from },
          { to: request.params.from },
        ],
      },
      {
        $or: [{ from: request.params.to }, { to: request.params.to }],
      },
    ],
  })
    .then(conversation => {
      if (!conversation) {
        const conversation = new Conversation({
          from: request.params.from,
          to: request.params.to,
        })
        conversation
          .save()
          .then(conversation =>
            response
              .status(201)
              .json({ message: 'create', conversation }),
          )
      } else {
        response.status(200).json({
          message: 'find',
          conversation,
        })
      }
    })
    .catch(err => {
      response.status(500).json(err)
    })
}
