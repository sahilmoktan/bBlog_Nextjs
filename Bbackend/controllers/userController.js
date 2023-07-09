import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";
import asyncHandler from "express-async-handler";

// Register a user
export const registerUser = asyncHandler(async (req, res) => {
    console.log('am hit register')
  const {
    firstname,
    lastname,
    email,
    confirmPassword,
    picturePath,
    friends,
    location,
    occupation,
    
  } = req.body;

  if (!firstname || !lastname || !email || !confirmPassword) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json("User already registered!");
    
  }
  //hash password
  const hashedPassword = await bcrypt.hash(confirmPassword, 10);
  // console.log("Hashed Password:", hashedPassword);
  const user = await User.create({
    firstname,
    lastname,
    email,
    confirmPassword: hashedPassword,
    // picturePath,
    // friends,
    location,
    occupation,
    
  });
  // console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User Data not valied");
  }
  // res.json({ message: "Registered the user" });
});



//Login user
export const loginUser = asyncHandler(async (req, res) => {
  console.log('am hit login')
  const { email, confirmPassword } = req.body;
  if (!email || !confirmPassword) {
    res.status(400).send("All fields are Mandatory");
  } else {
    const user = await User.findOne({ email }).select("-confirmPassword");
    if (user) {
      const accessToken = jwt.sign(
        {
          user: {
            email: user.email,
            id: user.id,
          },
        },
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "15m" }
      );
      res.status(200).json({ accessToken, user })
      
    } else {
      res.send("User not found");
    }
  }
});


// export default registerUser;
// export {
//   registerUser,
//     loginUser,
  
// };
