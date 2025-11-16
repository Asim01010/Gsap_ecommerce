import Register from "../models/registerModal.js";
import bcrypt from "bcrypt";

export const registerController = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
    terms,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
  }

  if (gender !== "male" && gender !== "female") {
    return res.status(400).json({
      success: false,
      message: "Invalid gender.",
    });
  }

  // 👉 Your new condition (deny male users)
  if (gender === "male") {
    return res.status(401).json({
      success: false,
      message: "You are not suitable for this website.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format.",
    });
  }

  let existingUser = await Register.findOne({ email });
  if (existingUser) {
    return res.status(401).json({
      success: false,
      message: "Email already registered.",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters.",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match.",
    });
  }

  if (!terms) {
    return res.status(400).json({
      success: false,
      message: "You must accept terms.",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Register.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    confirmPassword: hashedPassword,
    gender,
    terms,
  });

  return res.status(200).json({
    success: true,
    message: "User registered successfully!",
    user,
  });
};
