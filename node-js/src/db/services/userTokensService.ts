import { Prisma } from "@prisma/client";
import prisma from "../config/database.js";

export const addStravaTokenToDb = async (
  token: Prisma.TokenUncheckedCreateInput
) => {
  return await prisma.token.create({
    data: {
      ...token,
    },
  });
};

export const getStravaTokenFromDb = async (userId: number) => {
  return await prisma.token.findFirstOrThrow({
    where: {
      userId: userId,
      expiresAt: {
        gt: new Date(),
      },
    },
  });
};
