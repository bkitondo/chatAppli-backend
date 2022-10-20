const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/signup', userController.createUser)
router.get('/signup', userController.getAllUser)
router.post('/signin', userController.signIn)

module.exports = router