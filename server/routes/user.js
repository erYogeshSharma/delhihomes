import express from "express";
const router = express.Router();

import {signin, signup, googleLogin} from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin",signin);
router.post("/googleLogin",googleLogin);

export default router;

