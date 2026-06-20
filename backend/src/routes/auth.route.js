import express from "express";
import { checkAuth ,login, logout, signup,updateProfile } from "../controllers/auth.controller.js";
const router = express.Router()
import { protectRoute } from "../middleware/auth.middleware.js";


//signup
router.post("/signup", signup);

//login
router.post("/login", login);

//logout
router.post("/logout", logout);

//updated

router.put("/update-profile",protectRoute, updateProfile);

router.get("/check", protectRoute,checkAuth);

export default router;