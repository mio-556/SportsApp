import axios from "axios";
import {
  defaultStravaTokensResponse,
  StravaTokensResponse,
} from "../types/stravaTypes.js";
export const getStravaAccessToken = async (
  authorizationCode: string,
  clientId: string,
  clientSecret: string
): Promise<StravaTokensResponse> => {
  try {
    const response = await axios.post(
      `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode}&grant_type=authorization_code`
    );
    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      response_status: response.status,
      expires_at: response.data.expires_at,
    };
  } catch (err) {
    return {
      ...defaultStravaTokensResponse,
      response_err: <string>err,
    };
  }
};
