const express = require('express')
const router = express.Router()
// const Restr = require('../app')
// const auth = Restr.restrictor 

const messageControler = require('../controllers/message')

router.post('/add', messageControler.addMessage)
router.post('/get', messageControler.getAllMessage)
// router.get('/get', messageControler.getAllMessage)
router.get('/getall/:id', messageControler.getMessage)


module.exports = router 