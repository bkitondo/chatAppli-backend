const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/signup', userController.createUser)
router.post('/signin', userController.signIn)
router.get('/signup/:id', userController.getAllUser)

module.exports = router
