import { Prisma } from "@prisma/client";
import prisma from "../config/database.js";
import { ACTIVITY_DEFINITIONS } from "../../constants/activityDefinitions.js";
import { PrismaClient } from "@prisma/client/extension";

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

export const addUserActivityData = async (
  activityData:
    | Prisma.RunActivityCreateInput
    | Prisma.BikeActivityCreateInput
    | Prisma.ColdBathsCreateInput,
  // type is one of prisma models
  activityName: keyof PrismaClient
) => {
  // (prisma as any) - workaround for prisma not supporting dynamicall selecting of models
  await (prisma as any)[activityName].create({
    data: {
      ...activityData,
    },
  });
};

export const deleteUserActivityData = async (
  activityName: keyof PrismaClient,
  activityId: number
) => {
  const x = await (prisma as any)[activityName].delete({
    where: {
      id: activityId,
    },
  });
};
// TODO:s
// get last activities from database
