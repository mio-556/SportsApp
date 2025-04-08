import axios from "axios";
import type { StravaActivity } from "../types/stravaTypes.ts";
import { defaultStravaActivity } from "../types/stravaTypes.js";
import { accessTokenStrava } from "../constants/stravaTokens.js";

// get all activities from database
export const getUserActivitiesData = async (
  clientId: string | number,
  activitiesCount: number | string
) => {
  try {
    const response = await axios.get(
      `https://www.strava.com/api/v3/athlete/activities?access_token=${accessTokenStrava}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return "Error ocurred fetching data from strava";
    }
  } catch (err) {
    return err;
  }
};

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
