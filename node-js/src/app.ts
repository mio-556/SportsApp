// Example usingn Express.js
import express, { Request, Response, RequestHandler } from "express";
import runsRoute from "./routes/api/runs.js";
import lastActivitiesRoute from "./routes/api/lastActivities.js";
const app = express();

const exampleMiddleware: RequestHandler = (req, res, next): void => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
};

app.use(exampleMiddleware);

// Defining the routes
app.get("/", (request: Request, response: Response) => {
  response.send("<h3>Express.js server.</h3>");
});

// Use route files
app.use("/runs", runsRoute);
app.use("/lastActivities", lastActivitiesRoute);

export default app;
