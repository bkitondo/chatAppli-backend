const express = require('express')
const router = express.Router()
const userController = require('../controler/user')

router.post('/signup', userController.createUser)
router.get('/signup', userController.getAllUser)

module.exports = router