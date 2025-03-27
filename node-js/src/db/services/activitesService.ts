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

// get all activities of specific type
export const getUserActivityData = async (
  userId: number,
  activityName: string
) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      [activityName]: true,
    },
  });
};

// TODO:
// get last activities from database
