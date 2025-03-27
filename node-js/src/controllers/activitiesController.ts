// handling http requests
import { Request, Response } from "express";
import { getUserActivitiesData } from "../db/services/activitesService.js";

export const getUserActivities = async (req: Request, res: Response) => {
  try {
    console.log("request:", req.params);
    const activityData = await getUserActivitiesData(Number(req.params.userId));
    if (!activityData) {
      res.status(404).json({ message: "Activities not found" });
    }
    res.json(activityData);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" + err });
  }
};
