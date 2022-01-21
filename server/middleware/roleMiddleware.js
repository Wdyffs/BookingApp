const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "not auth" });
      }
      const { role: userRoles } = jwt.verify(token, process.env.SECRET_KEY);
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({ message: "You have no success" });
      }
      next();
    } catch (e) {
      return res.status(403).json({
        message: "User not authorizated",
      });
    }
  };
};
