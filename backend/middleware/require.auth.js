const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

function auth(role) {
  return async (req, res, next) => {
    try {
      const authHeader = req.header("Authorization");

      if (!authHeader) {
        return res
          .status(401)
          .json({ message: "Authorization header missing" });
      }

      const token = authHeader.replace("Bearer ", "");

      if (!token) {
        return res.status(401).json({ message: "Authorization token missing" });
      }

      const decoded = jwt.verify(token, process.env.SECRET);
      if (!decoded || !decoded.id) {
        return res.status(401).json({ message: "Invalid authorization token" });
      }

      const user = await User.findById(decoded.id);

      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }

      if (user.role !== role) {
        return res.status(403).json({ message: "User role not authorized" });
      }

      req.user = user;
      next();
    } catch (err) {
      if (err instanceof jwt.JsonWebTokenError) {
        res.status(401).json({ message: "Invalid authorization token" });
      } else if (err instanceof jwt.TokenExpiredError) {
        res.status(401).json({ message: "Authorization token expired" });
      } else {
        res.status(500).json({ message: "Server Error" });
      }
    }
  };
}

module.exports = auth;
