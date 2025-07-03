import express from "express";
import * as departmentController from "./deptController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import { authorizeRoles, ROLE_IDS } from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Department management endpoints
 */

/**
 * @swagger
 * /dept:
 *   post:
 *     summary: Create a new department
 *     tags: [Departments]
 *     requestBody:
 *       required: true
 *       description: Department name to be created
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dept_name
 *             properties:
 *               dept_name:
 *                 type: string
 *                 example: Computer Science
 *                 description: The name of the department
 *     responses:
 *       201:
 *         description: Department created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Department created successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     dept_id:
 *                       type: integer
 *                       example: 1
 *                     dept_name:
 *                       type: string
 *                       example: Computer Science
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post("/dept", authenticateJWT, authorizeRoles(ROLE_IDS.ADMIN), departmentController.createDepartment);

/**
 * @swagger
 * /dept:
 *   get:
 *     summary: Get all departments
 *     tags: [Departments]
 *     responses:
 *       200:
 *         description: A list of departments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Departments retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       dept_id:
 *                         type: integer
 *                         example: 1
 *                       dept_name:
 *                         type: string
 *                         example: Computer Science
 *       404:
 *         description: No departments found
 *       500:
 *         description: Internal server error
 */
router.get("/dept", departmentController.getAllDepartments);

/**
 * @swagger
 * /dept/{id}:
 *   get:
 *     summary: Get department by ID
 *     tags: [Departments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The department ID
 *     responses:
 *       200:
 *         description: Department retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Department retrieved successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     dept_id:
 *                       type: integer
 *                       example: 2
 *                     dept_name:
 *                       type: string
 *                       example: Mathematics
 *       404:
 *         description: Department not found
 *       500:
 *         description: Internal server error
 */
router.get("/dept/:id", departmentController.getDepartmentbyId);

router.put("/dept/:id", authenticateJWT, authorizeRoles(ROLE_IDS.ADMIN), departmentController.updateDepartment);

router.delete("/dept/:id", authenticateJWT, authorizeRoles(ROLE_IDS.ADMIN), departmentController.deleteDepartment);

export default router;
