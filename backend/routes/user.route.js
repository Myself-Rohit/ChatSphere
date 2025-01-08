import express from "express";
import { getUser, updateProfile } from "../controllers/user.controller.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/getusers", verifyToken, getUser);
router.put("/update/:userId", verifyToken, updateProfile);

export default router;
