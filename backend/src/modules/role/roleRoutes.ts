import express from "express";
import * as roleController from "./roleController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Role management
 */

/**
 * @swagger
 * /role:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Manager
 *     responses:
 *       201:
 *         description: Role created
 *       400:
 *         description: Invalid input
 */
router.post("/role", roleController.createRole);

/**
 * @swagger
 * /role:
 *   get:
 *     summary: Get all roles (admin only)
 *     tags: [Roles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Admin
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/role",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.ADMIN),
  roleController.getAllRoles
);

export default router;
