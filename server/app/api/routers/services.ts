import { Router } from "express";
import { aiHandler } from "../handlers/services/ai";
import { promptSanitizer } from "../middlewares/promptSanitizer";

export const serviceRouter = Router();
serviceRouter.post("/ai", promptSanitizer, aiHandler)
