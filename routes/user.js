const express = require('express')
const router = express.Router()
const userController = require('../controler/user')
// const passport = require('passport')
// require('../middlewares/auth')
// router.use(passport.initialize())

router.post('/signup', userController.createUser)
router.get('/signup', userController.getAllUser)
router.post('/signin', userController.signIn)

module.exports = router