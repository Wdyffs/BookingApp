const express = require("express");
const User = require("../models/user");
const Role = require("../models/role");
const userController = require("../controllers/userController");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const router = express.Router();
// const roleMiddleware = require("../middleware/roleMiddleware");

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
router.get(
  "/users",
  /*roleMiddleware(["User"]),*/ async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
);
router.get("/me", async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            res.json({ message: "not auth" });
        }
        const decoderData = jwt.verify(token, process.env.SECRET_KEY);
        const candidate = await User.findOne({_id: decoderData.id});
        if (!candidate) throw new Error('There is no user with that email')
        res.status(200).json({data: decoderData, user: candidate})
    } catch (e) {
        res.status(500).json({message: "Error of token"})
    }
})

module.exports = router;
