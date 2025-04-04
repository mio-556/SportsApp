import express from "express";
import {
  getUserActivities,
  getUserActivity,
  addUserActivity,
  deleteUserActivity,
} from "../../controllers/activitiesController.js";

const router = express.Router();

router.get("/user/:userId", getUserActivities);
router.get("/user/:userId/:activityName", getUserActivity);

router.post("/:activityName/add", addUserActivity);

router.delete("/:activityName/:activityId/", deleteUserActivity);

export default router;
