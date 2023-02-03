import express from "express";

import * as authController from "../controllers/authController";

const router = express.Router();

router.post("/logins", authController.login);
router.post("/creates", authController.signUp);

export default router;
