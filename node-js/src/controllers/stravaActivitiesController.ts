// handling http requests
import { Request, Response } from "express";
import {
  getUserActivitiesData,
  filterStravaActivities,
} from "../services/stravaActivitiesService.js";

// get all user last activities
export const getUserActivities = async (req: Request, res: Response) => {
  try {
    let stravaActivitiesData: Array<Object> = [];
    const stravaActivitiesDataRaw = await getUserActivitiesData(
      Number(req.params.userId),
      Number(req.params.activitiesCount)
    );
    // console.log("stravaActivitiesDataRaw.data", stravaActivitiesDataRaw.data);
    //filter strava activity data
    if (stravaActivitiesDataRaw.status === 200) {
      stravaActivitiesData = filterStravaActivities(
        stravaActivitiesDataRaw.data
      );
    }
    if (stravaActivitiesDataRaw.status === 401) {
      res.status(401).json({ message: "Unauthorized" });
    }
    if (!stravaActivitiesData) {
      res.status(201).json({ message: "No Data" });
    }
    res.json(stravaActivitiesData);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from STRAVA" + err });
  }
};
