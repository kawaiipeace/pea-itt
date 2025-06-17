import express from "express";
import * as roleController from "./roleController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

router.post("/role", roleController.createRole);

router.get(
  "/role",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.ADMIN),
  roleController.getAllRoles
);

export default router;
