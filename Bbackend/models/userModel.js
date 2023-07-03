import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please add the username"],
    },
    lastname: {
      type: String,
      required: [true, "please add the username"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
    picturePath:{
      type: String,
      default:" ",
    },
    friends:{
      type: Array,
      default:[ ]
    },
    location: String,
    occupation: String,
    viewProfile: Number,
    impression: Number,
  },
  { timestamps: true }
);

// module.exports = mongoose.model("User", UserSchema);

const User = mongoose.model("User", UserSchema);
export {User};