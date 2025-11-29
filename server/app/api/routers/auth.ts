import { Router} from "express";
import { registerHandler } from "../handlers/auth/registerHandler";
import { loginHandler } from "../handlers/auth/loginHandler";

export const authRouter = Router();

// Regsitering Routes 
authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);