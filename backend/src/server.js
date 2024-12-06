import express from "express";
import dotenv from 'dotenv';
import aiRouter from "./routes/ai.router.js";

dotenv.config({path:"/Users/prakashdey/Desktop/JuniorDev/.env"});

const app = express();
app.use(express.json());

app.use("/api/v1/ai", aiRouter);

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
