// auth.routes.ts

// Modules
import { Router } from "express";

// Controllers
import { register, login, logout } from "../controllers/auth.controller";


const router = Router();

router.post("/api/register", register);

router.post("/api/login", login);

router.post("/api/logout", logout);

export default router;