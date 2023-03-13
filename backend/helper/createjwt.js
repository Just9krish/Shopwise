const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const createToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, secret, {
    expiresIn: process.env.EXPIRETIME,
  });
};

module.exports = createToken;
