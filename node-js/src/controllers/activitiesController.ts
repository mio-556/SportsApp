// handling http requests
import { Request, Response } from "express";
import {
  getUserActivitiesData,
  getUserActivityData,
} from "../db/services/activitesService.js";

// get all user's activities
export const getUserActivities = async (req: Request, res: Response) => {
  try {
    const activityData = await getUserActivitiesData(Number(req.params.userId));
    if (!activityData) {
      res.status(404).json({ message: "Activities not found" });
    }
    res.json(activityData);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" + err });
  }
};

// get user's specific activity
export const getUserActivity = async (req: Request, res: Response) => {
  try {
    console.log("request:", req.params);
    const activityData = await getUserActivityData(
      Number(req.params.userId),
      String(req.params.activityName)
    );
    if (!activityData) {
      res.status(404).json({ message: "Activities not found" });
    }
    res.json(activityData);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" + err });
  }
};
