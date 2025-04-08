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
      req.params.activitiesCount
    );
    // console.log(stravaActivitiesDataRaw);
    //filter strava activity data
    if (stravaActivitiesDataRaw) {
      stravaActivitiesData = filterStravaActivities(stravaActivitiesDataRaw);
    }
    if (!stravaActivitiesData) {
      res.status(201).json({ message: "No Data" });
    }
    res.json(stravaActivitiesData);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from STRAVA" + err });
  }
};
