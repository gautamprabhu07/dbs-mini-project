import express from "express";
import { getAllProblems, createProblem } from "../controllers/problemController.js";

const router = express.Router();

router.get("/", getAllProblems)

router.post("/", createProblem);

export default router;