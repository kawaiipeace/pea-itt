import express from "express";
import * as chackController from "./checkController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

router.post(
  "/check-time",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  chackController.check
);
// router.get("/check/:type");


export default router;
