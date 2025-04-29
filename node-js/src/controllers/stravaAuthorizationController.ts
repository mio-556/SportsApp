import { Request, Response } from "express";
import { getStravaAccessToken } from "../services/getStravaAccessTokenService.js";
import type { StravaTokensResponse } from "../types/stravaTypes.js";
import { addStravaTokenToDb } from "../db/services/userTokensService.js";

export const getAccessToken = async (req: Request, res: Response) => {
  if (
    req.params.authorizationCode &&
    process.env.STRAVA_CLIENT_ID &&
    process.env.STRAVA_CLIENT_SECRET
  ) {
    try {
      //   when we get an authorization code from FE trigger the exchange request for access token
      const tokensResponse: StravaTokensResponse = await getStravaAccessToken(
        req.params.authorizationCode,
        process.env.STRAVA_CLIENT_ID,
        process.env.STRAVA_CLIENT_SECRET
      );

      // store the tokens into the database
      const addTokenToDbResult = await addStravaTokenToDb({
        userId: Number(req.params.userId),
        accessToken: tokensResponse.access_token,
        refreshToken: tokensResponse.refresh_token,
        expiresAt: new Date(tokensResponse.expires_at * 1000),
        provider: "Strava",
      });

      if (
        typeof tokensResponse.access_token === "string" &&
        addTokenToDbResult
      ) {
        res.status(200).json({ message: "success" });
      } else {
        throw new Error(
          "Failed to get access_token. " + tokensResponse.response_err
        );
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
