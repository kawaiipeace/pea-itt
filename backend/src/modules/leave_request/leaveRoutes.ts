import express from "express";
import * as leaveController from "./leaveController";
import { upload } from "../../common/middleware/upload";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Leave Request
 *   description: Operations related to leave requests
 */

/**
 * @swagger
 * /leave-request:
 *   post:
 *     summary: Create a new leave request
 *     tags: [Leave Request]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - reason
 *             properties:
 *               reason:
 *                 type: string
 *                 example: "Sick leave"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Optional supporting document
 *     responses:
 *       201:
 *         description: Leave request created successfully
 *       400:
 *         description: Validation error or invalid input data
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/leave-request",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  upload.single("file"),
  leaveController.createLeaveRequest
);

/**
 * @swagger
 * /leave-request:
 *   get:
 *     summary: Get all leave requests
 *     tags: [Leave Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         description: Filter by user ID
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [leave_datetime]
 *           default: leave_datetime
 *         description: Sort by field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: A list of leave requests
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: No leave requests found
 */
router.get(
  "/leave-request",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  leaveController.getLeaveRequests
);

/**
 * @swagger
 * /leave-request/{id}:
 *   get:
 *     summary: Get a leave request by ID
 *     tags: [Leave Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Leave request details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Leave request not found
 */
router.get(
  "/leave-request/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  leaveController.getLeaveRequestByID
);

/**
 * @swagger
 * /leave-request/picture/{id}:
 *   get:
 *     summary: Get the picture for a leave request
 *     tags: [Leave Request]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The leave request picture
 *         content:
 *           image/jpeg:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Image not found
 *       500:
 *         description: Server error
 */
router.get(
  "/leave-request/picture/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  leaveController.leaveRequestPicture
);

/**
 * @swagger
 * /leave-request/{id}:
 *   put:
 *     summary: Update a leave request status (Approve/Reject)
 *     tags: [Leave Request]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [approved, rejected, pending]
 *                 example: approved
 *     responses:
 *       200:
 *         description: Leave request updated successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.put(
  "/leave-request/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR),
  leaveController.updateLeaveRequest
);

router.delete(
   "/leave-request/:id",
   authenticateJWT,
   authorizeRoles(ROLE_IDS.STUDENT),
   leaveController.deleteLeaveRequest
)

export default router;
