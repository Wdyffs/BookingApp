const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.json({ message: "not auth" });
    }
    const decoderData = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoderData;
    next();
  } catch (e) {
    return res.status(403).json({ message: "User not authorizated" });
  }
};
