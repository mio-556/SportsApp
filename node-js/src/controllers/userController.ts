// handling http requests
import { Request, Response } from "express";
import { getUsers } from "../db/services/userService.js";

export const getUsersList = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    if (!users) {
      res.status(404).json({ message: "Users not found" });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ err: "Error fetching data from database" });
  }
};
// TODO:
// get users data summary
