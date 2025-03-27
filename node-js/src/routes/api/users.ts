import express from "express";
import { getUsersList } from "../../controllers/userController.js";

const router = express.Router();

router.get("/", getUsersList);

export default router;
