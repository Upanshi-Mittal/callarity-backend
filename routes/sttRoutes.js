import express from "express";
import { sttController } from "../controllers/sttController.js";

const router = express.Router();

router.post("/", sttController);

export default router;
