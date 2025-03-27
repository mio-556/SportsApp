import express from "express";
import { getUserActivities } from "../../controllers/activitiesController.js";

const router = express.Router();

router.get("/user/:userId", getUserActivities);

export default router;
