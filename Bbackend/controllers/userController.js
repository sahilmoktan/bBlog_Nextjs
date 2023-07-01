import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../models/userModel";
import asyncHandler from 'express-async-handler'

// Register a user
export const registerUser = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password,
    picturePath,
    friends,
    location,
    occupation,
    viewProfile,
    impression,
  } = req.body;

  if (!firstname || !lastname || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);

  const user = await User.create({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    picturePath,
    friends,
    location,
    occupation,
    // viewProfile: Math.floor(Math.random()*1000),
    // impression: Math.floor(Math.random()*1000),
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User Data not valied");
  }
  res.json({ message: "Registered the user" });
});


// module.exports= {registerUser}
// export {
//     loginUser,
//   currentUser,
// };
