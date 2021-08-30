const express = require("express");
const router = express.Router();

const UserModel = require("../models/UserModel");
const ProfileModel = require("../models/ProfileModel");
const FollowerModel = require("../models/FollowerModel");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

const userPng =
  "https://res.cloudinary.com/dopwbiqpv/image/upload/v1630236061/966hub/placeholder_user_j2pj1i.png";

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

router.get("/:username", async (req, res) => {
  const { username } = req.patams;

  try {
    if (username.length < 1) return res.status(401).send("Invalid");
    if (!regexUserName.test(username)) return res.status(401).send("Invalid");

    const user = await UserModel.findOne({ username: username.toLowerCase() });

    if (user) return res.status(401).send("username already taken");

    return res.status(200).send("Available");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    username,
    password,
    bio,
    snapchat,
    twitter,
    instagram,
    facebook,
    youtube,
  } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Invalid Email");
  if ( password.length < 6 ) {
    return res.status(401).send("Password most be atleast 6 charaters");
  }

  try {
    let user;
    user = await UserModel.findOne({ email: email.toLowerCase()});
    if (user) {
      return res.status(401).send("User already registerd");
    }

    user = new UserModel({
      name,
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password,
      profilePicUrl: req.body.profilePicUrl || userPng
    })

    user.password = await bcrypt.hash(password, 10);
    await user.save();

  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error"; )
  }
});

module.exports = router;