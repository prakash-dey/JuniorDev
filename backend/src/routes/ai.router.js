import { Router } from "express";
import generateResponseFromPrompt from "../controller/generate.controller.js";
const aiRouter = Router();


aiRouter.post("/generate", generateResponseFromPrompt);

export default aiRouter;