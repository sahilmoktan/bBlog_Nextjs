import express from "express";
// import asyncHandler from 'express-async-handler'
import router from "express";

// const router = express.Router();

import {registerUser} from "../controllers/userController"

router.post("/register", registerUser);

// router.get("/current", validateToken, currentUser);

// export default router;
module.exports= router

