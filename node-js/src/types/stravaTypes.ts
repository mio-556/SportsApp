export type StravaActivity = {
  name: String;
  type: String;
  distance: Number;
  average_heartrate: Number;
  start_date_local: String;
};
export const defaultStravaActivity: StravaActivity = {
  name: "",
  type: "",
  distance: 0,
  average_heartrate: 0,
  start_date_local: "",
};
export type StravaTokensResponse = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  created_at?: number;
  response_status?: number;
  response_err?: string;
};
export const defaultStravaTokensResponse: StravaTokensResponse = {
  access_token: "",
  refresh_token: "",
  expires_at: 0,
};
