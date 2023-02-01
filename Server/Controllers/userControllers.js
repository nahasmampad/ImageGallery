const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const {generateToken} = require("../helpers/tokengenerate");

module.exports = {
  siginIn: async (req, res) => {
    try {
      const data = req.body;
      console.log(data,"sig");

      const newuser = await User.findOne({ email: data.email });
      if (newuser) {
        return res.status(400).json({
          message: "the email address allredy exist",
          success:false
        });
      }
      console.log(newuser,"newUS");

      const cryptedPassword = await bcrypt.hash(data.password, 12);
      const user = await new User({
        email: data.email,
        password: cryptedPassword,
      }).save();


      res.status(200).json({ success: true, user:user.email });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });

      
      if (!user) {
        console.log( "ss");
        return res.status(200).json({
          message:
            "the email address allredy used.",
        });
      }

      const check = await bcrypt.compare(password, user.password);
      console.log(check,"check");
      if (!check) {
        return res.status(200).json({
          message: "Invalid password.Please try again.",
        });
      }
      const token = generateToken({ id: user._id.toString() }, "7d");
      console.log("token=>",token);

      res.send({ token: token, email: user.email, success: true });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },
};
