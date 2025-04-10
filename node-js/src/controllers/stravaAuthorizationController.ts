import { Request, Response } from "express";
import { getStravaAccessToken } from "../services/getStravaAccessToken.js";
import type { StravaTokensResponse } from "../types/stravaTypes.js";

export const getAccessToken = async (req: Request, res: Response) => {
  //   when we got authorization code from FE trigger the exchange request for access token
  if (
    req.params.authorizationCode &&
    process.env.STRAVA_CLIENT_ID &&
    process.env.STRAVA_CLIENT_SECRET
  ) {
    try {
      const response: StravaTokensResponse = await getStravaAccessToken(
        req.params.authorizationCode,
        process.env.STRAVA_CLIENT_ID,
        process.env.STRAVA_CLIENT_SECRET
      );
      const { access_token, refresh_token, response_status, response_err } =
        response;
      if (typeof access_token === "string") {
        res.status(200).json({ message: "success" });
      } else {
        throw new Error("Failed to get access_token. " + response_err);
      }
    } catch (err) {
      res.status(500).json({
        err: "Error fetching access_token from STRAVA :" + err,
      });
    }
  } else {
    res.status(500).json({ err: "Error: missing required parameters" });
  }
};
