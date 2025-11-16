import express from "express";

import { registerController } from "../controllers/registerController.js";

const RegisterRoute = express.Router();
RegisterRoute.post("/", registerController);

export default RegisterRoute;
