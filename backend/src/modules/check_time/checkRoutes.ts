import express from "express";
import * as chackController from "./checkController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CheckTime
 *   description: Check time management
 */

/**
 * @swagger
 * /check-time:
 *   post:
 *     summary: Create a new check time record
 *     tags: [CheckTime]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type_check
 *               - latitude
 *               - longitude
 *             properties:
 *               type_check:
 *                 type: string
 *                 enum: [in, out]
 *                 example: in
 *               location:
 *                 type: string
 *                 example: Office
 *               latitude:
 *                 type: number
 *                 example: 13.7563
 *               longitude:
 *                 type: number
 *                 example: 100.5018
 *     responses:
 *       200:
 *         description: Check-in or check-out successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Check-in successful
 *                 data:
 *                   $ref: '#/components/schemas/CheckTime'
 *       400:
 *         description: Validation error
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post(
  "/check-time",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  chackController.checkTime
);

/**
 * @swagger
 * /check-time:
 *   get:
 *     summary: Get check time records
 *     tags: [CheckTime]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type_check
 *         schema:
 *           type: string
 *         description: Filter by type_check (e.g., 'in', 'out')
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, user_id, time, type_check, location, note, latitude, longitude]
 *           default: id
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         description: Filter by user_id
 *     responses:
 *       200:
 *         description: A list of check time records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Check time data fetched successfully.
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CheckTime'
 *       404:
 *         description: No check time records found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No check time records found.
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get(
  "/check-time",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  chackController.getTimeCheck
);

export default router;
