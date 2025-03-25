// Example usingn Express.js
import express from "express";
import runsRoute from "./routes/api/runs.js";
import lastActivitiesRoute from "./routes/api/lastActivities.js";
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight OPTIONS requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// Defining the routes
app.get("/", (request, response) => {
  response.send("<h3>Express.js server.</h3>");
});

// Use route files
app.use("/runs", runsRoute);
app.use("/lastActivities", lastActivitiesRoute);

export default app;
