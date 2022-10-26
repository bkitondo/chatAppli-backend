
const ConversationSchema = require('../models/conversation')

exports.createConversation = async (req, res) => {
    const { participants } = req.body
    const exist = await ConversationSchema.findOne({
        particiapnts: { $all: participants }
    })
    if (exist) return res.send(exist)

    console.log(participants);

    const conversation = await ConversationSchema.create({
        particiapnts: [...participants]
    })
    return res.send(conversation)


    //     .then(data=>{
    //         if(data){
    //             res.status(201).json({message:"exists",conversation:data})
    //         }
    //         else {
    //             const conversation = new ConversationSchema({
    //                 particiapnts : [...participants]  
    //               })
    //               conversation.save()
    //               .populate({path:"participants", select:"userName"})
    //               .then(data=>{
    //                   res.status(200).json({
    //                     success:true,
    //                      conversation : data
    //                   })
    //               })
    //               .catch(err => console.log(err))
    //         }
    //     })
    //     .catch(err=> res.status(500).json(err))
}

exports.getConversation = (req, res) => {
    ConversationSchema.findOne({
        particiapnts: { $all: [...req.params] }
    })
        .populate({ path: "particiapnts", select: "userName" })
        .then(conversation => {
            res.status(200).json(conversation)
        })
        .catch(err => res.status(500).json(err))
}
