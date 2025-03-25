import express from "express";
import fs from "fs/promises";
import { readdir } from "fs/promises";
import { join } from "path";
import { json } from "stream/consumers";

const router = express.Router();

// runs/
// gets all the runs
router.get("/", async (request, response) => {
  //   let lastActivities = [];
  //   const activitiesRootDir = "./models/json-data/activities/";
  try {
    //     // open all the data files in activities dir
    //     try {
    //       // list all the activity data files
    //       const files = await readdir(activitiesRootDir);
    //       for (const fileName of files) {
    //         const fileData = await fs.readFile(
    //           join(activitiesRootDir, fileName),
    //           "utf8"
    //         );
    //         let parsedFileData = JSON.parse(fileData);
    //         lastActivities.push(parsedFileData);

    //         // find last activity by date
    //       }
    //     } catch (err) {}

    // find last activity by date
    // add the last activity data to separate array / obj and send as response

    // const runsData = await fs.readFile(
    //   "./models/json-data/activities/runsData.json",
    //   "utf8"
    // );
    // const parsedData = JSON.parse(runsData);
    // // console.log(parsedData);
    // const keys = Object.keys(parsedData);
    // const lastRunActivity = keys.length > 0 ? parsedData[keys[0]] : {};
    // console.log(lastRunActivity);
    // if (keys.length > 0) {
    //   lastActivities.push({ runs: { [keys[0]]: parsedData[keys[0]] } });
    //   lastActivities.push({ [keys[0]]: parsedData[keys[0]] });
    // }

    // response.json(lastActivities);
    response.json("Last Activities will be here");
  } catch (err) {
    response.status(500).json({ err: "Error reading the JSON data file" });
  }
});

export default router;
