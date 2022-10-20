const express = require('express')
const router = express.Router()
// const Restr = require('../app')
// const auth = Restr.restrictor 

const messageControler = require('../controllers/message')

router.post('/add', messageControler.addMessage)


module.exports = router 