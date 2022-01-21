const express = require("express");
const User = require("../models/user");
const userController = require("../controllers/userController");
const router = express.Router();
const roleMiddleware = require("../middleware/roleMiddleware");

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
router.get("/users", roleMiddleware(["User"]), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
