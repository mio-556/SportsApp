import prisma from "../config/database.js";
import { ACTIVITY_DEFINITIONS } from "../../constants/activityDefinitions.js";

// get all activities from database
export const getUserActivitiesData = async (userId: number) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: ACTIVITY_DEFINITIONS,
  });
};

// TODO:
// get last activities from database

// get activities from database
