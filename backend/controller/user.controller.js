const User = require("../models/user.model");
const createToken = require("../helper/createjwt");

async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = createToken(user);

    res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
}

async function signupUser(req, res, next) {
  const { name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = await User.create({ name, email, password, role });

    // Generate JWT token
    const token = createToken(user);

    res.json({ token });
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      return res.status(422).json({ message: err.message });
    } else {
      return res.status(500).json({ message: "Server Error" });
    }
  }
}

module.exports = {
  loginUser,
  signupUser,
};
