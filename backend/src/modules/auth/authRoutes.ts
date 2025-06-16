import express from "express";
import { upload } from "../../common/middleware/upload";
const router = express.Router();
import * as authController from "./authController";

router.post(
  "/register/student",
  upload.single("picture"),
  authController.registerStu
);
// router.post("/login");
// router.post("/logout");

export default router;
