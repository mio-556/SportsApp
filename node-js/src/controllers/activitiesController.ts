// handling http requests
import { Request, Response } from "express";
import {
  addUserActivityData,
  getUserActivitiesData,
  getUserActivityData,
} from "../db/services/activitiesService.js";

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
    const activityData = await getUserActivityData(
      Number(req.params.userId),
      String(req.params.activityName)
    );
    if (!activityData) {
      res.status(404).json({ message: "Activity not found" });
    } else {
      res.json(activityData);
    }
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" + err });
  }
};

//post user's specific activity item
export const addUserActivity = async (req: Request, res: Response) => {
  try {
    // TODO: validate data
    await addUserActivityData(req.body, req.params.activityName);
    res.status(201).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" + err });
  }
};
