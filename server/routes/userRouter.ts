import express from "express";

import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/api/login", authController.login);
router.post("/api/create", authController.signUp);

export default router;
