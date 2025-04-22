import axios from "axios";
import type { StravaActivity } from "../types/stravaTypes.ts";
import { defaultStravaActivity } from "../types/stravaTypes.js";
import { getStravaTokenFromDb } from "../db/services/userTokensService.js";

// get all activities from database
export const getUserActivitiesData = async (
  clientId: number,
  activitiesCount: number | string
): Promise<any> => {
  try {
    const stravaToken = await getStravaTokenFromDb(clientId);
    if (!stravaToken.accessToken) {
      throw new Error("Failed to get access_token from local db. ");
    } else {
      console.log("access_token token retrieved from local db.");
    }

    const response = await axios.get(
      `https://www.strava.com/api/v3/athlete/activities?per_page=${activitiesCount}&access_token=${stravaToken.accessToken}`
    );
    if (response.status === 200) {
      return response;
    } else {
      return "Error ocurred fetching data from strava";
    }
  } catch (err) {
    return err;
  }
};
// filters strava activities just for the relevant ones defined by defaultStravaActivity type
export const filterStravaActivity = (stravaActivityDataRaw: Object) => {
  return Object.fromEntries(
    Object.entries(stravaActivityDataRaw).filter(
      ([dataItemKey, dataItemValue]) => dataItemKey in defaultStravaActivity
    )
  );
};

export const filterStravaActivities = (
  stravaActivitiesDataRaw: Array<Object>
) => {
  return stravaActivitiesDataRaw.map((activityData) => {
    return filterStravaActivity(activityData);
  });
};
