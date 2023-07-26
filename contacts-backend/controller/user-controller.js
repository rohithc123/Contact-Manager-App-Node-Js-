const asyncHandler = require("express-async-handler");
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//register a user
// route POST /api/users/register
// access public as of now
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are needed");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //hashing password

  const hashedpassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedpassword,
  });

  if (user) {
    res.status(201).json({ id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }

  res.json({ message: "Registered the user" });
});

//login user
// route POST /api/users/login
// access public as of now
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Need all fields");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Register first");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
      console.log("working");
      const accessToken = jwt.sign(
          {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      //giving the expiration time of the token
      { expiresIn: "10m" }
    );

    res.status(200).json({ accessToken });
} else {
    res.status(401);
    throw new Error("email or password is not valid");
  }

  res.json({ message: "login user" });
});

//current user info
// route POST /api/users/current
// access private as of now
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
