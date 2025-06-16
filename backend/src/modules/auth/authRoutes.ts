import express from "express";
import { upload } from "../../common/middleware/upload";
const router = express.Router();
import * as authController from "./authController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

router.post(
  "/register/student",
  upload.single("picture"),
  authController.registerStu
);

router.post("/login", authController.login);

router.get(
  "/logout",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  authController.logout
);

export default router;
