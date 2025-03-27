import express from "express";
import {
  getUserActivities,
  getUserActivity,
} from "../../controllers/activitiesController.js";

const router = express.Router();

router.get("/user/:userId", getUserActivities);
router.get("/user/:userId/:activityName", getUserActivity);

export default router;
