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
