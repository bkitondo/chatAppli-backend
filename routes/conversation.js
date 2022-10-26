const express = require('express')
const router = express.Router()
const conversationController = require('../controllers/conversation')


router.post('/createconversation' , conversationController.createConversation)
router.get('/getconversation/:firstId/:secondId' , conversationController.getConversation)

 module.exports = router