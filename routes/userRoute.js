const express = require('express')
const User = require('../models/user')
const userController = require('../controllers/userController')
const { check } = require('express-validator')
const router = express.Router()

router.post(
  '/register',
  [
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Minimal length is 8 symbols')
      .isLength({ min: 8 })
  ],
  userController.createUser)

module.exports = router