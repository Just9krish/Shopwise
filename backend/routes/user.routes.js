const express = require("express");

const { loginUser, signupUser } = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", signupUser);

router.post("/login", loginUser);

module.exports = router;
