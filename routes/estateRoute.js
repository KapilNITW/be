import express from "express";
import { estateController } from "../controllers/estateController.js";

// router object
const router = express.Router();

// Login || POST
router.get("/get-estates", estateController);

export default router;
