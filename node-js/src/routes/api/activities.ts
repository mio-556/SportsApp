import express from "express";
import {
  getUserActivities,
  getUserActivity,
  addUserActivity,
} from "../../controllers/activitiesController.js";

const router = express.Router();

router.get("/user/:userId", getUserActivities);
router.get("/user/:userId/:activityName", getUserActivity);

router.post("/user/:userId/:activityName/add", addUserActivity);

export default router;
