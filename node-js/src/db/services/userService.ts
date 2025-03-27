// get all users
import prisma from "../config/database.js";

export const getUsers = async () => {
  return await prisma.user.findMany();
};
