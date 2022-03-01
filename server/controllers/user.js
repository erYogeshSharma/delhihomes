import bcrypt from "bcrypt";
import mongoose from "mongoose";
import express from "express";
import passport from "passport";
import keys from "../config/keys.js";
import jwt from "jsonwebtoken";

const router = express.Router();

//load validator functions
import { validateAuthInput, validateLoginInput } from "../validation/Auth.js";

// import user model
import User from "../models/user.js";

// signup

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  //validate registration details
  const { errors, isValid } = validateAuthInput(req.body);
  if (!isValid) return res.status(400).send(errors);

  // check if user already exists

  const user = await User.findOne({ email: email });

  if (user) {
    res.status(400).send({ error: "Email Alredy exists" });
  } else {
    const newUser = new User({
      name: `${firstName} ${lastName}`,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    res.status(200).send({ msg: " Registration completed please login!" });
  }
};

//signin

export const signin = async (req, res) => {
  const { email, password } = req.body;

  //check validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).send(errors);
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    errors.email = "user not found";
    res.status(400).send(errors);
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const result = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const token = jwt.sign(result, keys.secretOrKey, { expiresIn: 3600 });

      res.status(200).send({ result, sucess: true, token: token });
    } else {
      res.status(400).send({ error: "email or password incorrect" });
    }
  }
};

export const googleLogin = async (req, res) => {
  const { name, email, googleId } = req.body;
  console.log(name, email, googleId);

  const user = await User.findOne({ email: email });
  if (user) {
    res.status(200).send(user);
  } else {
    if (!user) {
      const newUser = new User({ name, email, googleId: googleId });
      await newUser.save(newUser);
      res.status(200).send({ msg: "Google Login Succesfull" });
    } else {
      res.status(400).send(newUser);
    }
  }
};
