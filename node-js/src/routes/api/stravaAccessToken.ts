import express from "express";
import { getAccessToken } from "../../controllers/stravaAuthorizationController.js";

const router = express.Router();

router.post("/:userId/:authorizationCode", getAccessToken);

export default router;
