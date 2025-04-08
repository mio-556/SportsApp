import express from "express";
import { getUserActivities } from "../../controllers/stravaActivitiesController.js";

const router = express.Router();

router.get("/user/:userId/lastActivities/:activitiesCount", getUserActivities);

export default router;
