const Message = require('../models/messageModel')

exports.addMessage = (req, res, next) => {
        const {from,to,message} = req.body;
        const msg = new Message({
            message,
            from,
            to
        })
        msg.save()
        .then((data)=>{
            res.status(201).json(`${data} est crée avec succés`)
        })
        .catch(err=> console.log(err))      
};

exports.getMessage = async(req, res, next)=>{
    const from = req.params.from
    const to = req.params.to
    const messages = await Message.find({
        $and: [
          { $or: [{ from: from }, { to: from }]},
          { $or: [{ from: to }, { to: to }] }
        ],
      });
      return res.status(200).send({
        type: "Success",
        messages
      });
}
