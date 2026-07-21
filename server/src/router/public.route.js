import express from "express";
<<<<<<< HEAD
import { ContactUsForm } from "../controllers/public.controller.js";
=======
import { ContactUsForm } from "../controller/public.controller.js";
>>>>>>> origin/main

const router = express.Router();

router.post("/contact-us", ContactUsForm);


export default router;