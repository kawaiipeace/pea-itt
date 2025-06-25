import express from "express";
import * as leaveController from "./leaveController";
import { upload } from "../../common/middleware/upload";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

router.post(
  "/leave-request",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  upload.single("file"),
  leaveController.createLeaveRequest
);
router.get(
  "/leave-request",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  leaveController.getLeaveRequests
);
router.get(
  "/leave-request/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  leaveController.getLeaveRequestByID
);

router.put(
  "/leave-request/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR),
  leaveController.updateLeaveRequest
);

export default router;
