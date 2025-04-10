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
  access_token?: String;
  refresh_token?: String;
  response_status?: Number;
  response_err?: String;
};
