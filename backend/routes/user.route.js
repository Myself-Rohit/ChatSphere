import express from "express";
import { getUser } from "../controllers/user.controller.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/getusers", verifyToken, getUser);

export default router;
