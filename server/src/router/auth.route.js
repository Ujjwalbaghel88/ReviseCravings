import express from "express";
import {
<<<<<<< HEAD
    LoginUser,
    LogoutUser,
    RegisterUser,
} from "../controllers/auth.controller.js";
=======
  LoginUser,
  LogoutUser,
  RegisterUser,
  SendOtp,
  VerifyOtp,
  ResetPassword,
} from "../controller/auth.controller.js";
import { OTPAuthProtect } from "../middleware/auth.middelware.js";
>>>>>>> origin/main

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LogoutUser);

<<<<<<< HEAD
=======
router.post("/send-otp", SendOtp);
router.post("/verify-otp", VerifyOtp);
router.post("/reset-password", OTPAuthProtect, ResetPassword);
>>>>>>> origin/main

export default router;