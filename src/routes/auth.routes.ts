// auth.routes.ts

// Modules
import { Router } from "express";

// Controllers
import { login, register } from "../controllers/auth.controller";


const router = Router();

router.post("/api/login", login);
router.post("/api/register", register);

export default router;