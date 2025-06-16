import express from "express";
import * as roleController from "./roleController";

const router = express.Router();

router.post("/role", roleController.createRole);
router.get("/role", roleController.getAllRoles);

export default router;
