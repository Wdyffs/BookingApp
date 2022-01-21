const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Different Validations
exports.validationRegisterUser = [
  check("email", "Email is not correct").isEmail(),
  check("password", "Minimal length is 8 symbols").isLength({
    min: 8,
    max: 16,
  }),
];

exports.validationLoginUser = [
  check("email", "Use valid email").normalizeEmail().isEmail(),
  check("password", "Type a password").exists(),
];
// ----------------------------------------------
exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect data for registration",
      });
    }

    const { email, password } = req.body;
    if (!email || !password) throw Error("Feel all fields");

    const doesExists = await User.findOne({ email });
    if (doesExists)
      res.status(400).json({
        message: `${email} this email does already exists try another email`,
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ value: "User" });
    const user = new User({
      email,
      password: hashedPassword,
      roles: [userRole.value],
    });
    await user.save();
    res.status(201).json({ message: "User has been successfully created" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const generateToken = (id, role) => {
  const payload = {
    id,
    role,
  };
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

exports.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Incorrect data for login",
      });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No user with this email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password try again" });
    }

    const token = generateToken(user._id, user.roles);

    return res.json({ token });
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
