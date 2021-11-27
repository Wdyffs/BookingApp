const User = require('../models/user')
const bcrypt = require('bcrypt')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
require('dotenv').config();

// Different Validations
exports.validationRegisterUser = [
  check('email', 'Email is not correct').isEmail(),
  check('password', 'Minimal length is 8 symbols')
    .isLength({ min: 8 })
];

exports.validationLoginUser = [
  check('email', 'Use valid email').normalizeEmail().isEmail(),
  check('password', 'Type a password').exists()
]
// ----------------------------------------------
exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data for registration'
      })
    }

    const { email, password } = req.body
    if (!email || !password) throw Error('Feel all fields')

    const doesExists = await User.findOne({ email })
    if (doesExists) throw Error(`${email} this email does already exists try another email`)

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({ email, password: hashedPassword })
    await user.save()
    res.status(201).json({ message: 'User has been created' })
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Incorrect data for login'
      })
    }

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'No user with this email' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password try again' })
    }

    const token = await jwt.sign(
      { userId: user.id },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    )

    res.json({ token, user: user.id })

  } catch (e) {
    res.status(500).json({
      message: 'Something went wrong'
    })
  }

}