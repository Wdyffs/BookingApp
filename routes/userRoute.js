const express = require("express");
// const User = require("../models/user");
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
  "/register",
  userController.validationRegisterUser,
  userController.registerUser
);
router.post(
  "/login",
  userController.validationLoginUser,
  userController.loginUser
);

module.exports = router;
