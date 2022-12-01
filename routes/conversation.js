const express = require('express')
const router = express.Router()
const conversationControler = require('../controllers/conversation')

router.get('/:from/:to', conversationControler.findOrCreate)
// router.get('/getall/:from/:to', conversationControler.getMessage)

module.exports = router
