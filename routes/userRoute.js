const express = require('express')
const User = require('../models/user')
const userController = require('../controllers/userController')
const { check } = require('express-validator')
const router = express.Router()

router.post('/register', userController.validation, userController.createUser)

module.exports = router