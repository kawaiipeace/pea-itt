import express from "express";
import * as departmentController from "./deptController";

const router = express.Router();

router.post("/dept", departmentController.createDepartment);
router.get("/dept", departmentController.getAllDepartments);
router.get("/dept/:id", departmentController.getDepartmentbyId);

export default router;