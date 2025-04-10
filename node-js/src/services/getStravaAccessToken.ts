import axios from "axios";
import { StravaTokensResponse } from "../types/stravaTypes.js";
export const getStravaAccessToken = async (
  authorizationCode: string,
  clientId: string,
  clientSecret: string
): Promise<StravaTokensResponse> => {
  console.log(
    "authorizationCode: ",
    authorizationCode,
    "clientId: ",
    clientId,
    "clientSecret: ",
    clientSecret
  );

  try {
    const response = await axios.post(
      `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${authorizationCode}&grant_type=authorization_code`
    );
    console.log(response);
    return {
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      response_status: response.status,
    };
  } catch (err) {
    return { response_err: <String>err };
  }
};
