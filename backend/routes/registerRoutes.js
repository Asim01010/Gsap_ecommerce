import express from "express";
import {
  registerController,
  verifyOTP,
} from "../controllers/registerController.js";

const RegisterRoute = express.Router();

// Register
RegisterRoute.post("/", registerController);

// Verify OTP
RegisterRoute.post("/verify-otp/:user_id", verifyOTP);

export default RegisterRoute;
