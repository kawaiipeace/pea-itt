import express from "express";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
    authorizeRoles,
    ROLE_IDS,
} from "../../common/middleware/authorizeRoles";
import * as notiController from "./notiController"

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management
 */

/**
 * @swagger
 * /noti:
 *   post:
 *     summary: Create a new notification
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_id
 *               - title
 *               - message
 *             properties:
 *               user_id:
 *                 type: integer
 *                 example: 1
 *               title:
 *                 type: string
 *                 example: Important update
 *               message:
 *                 type: string
 *                 example: Your request has been approved.
 *     responses:
 *       201:
 *         description: Notification created successfully
 *       400:
 *         description: Validation error or bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post(
    "/noti",
    authenticateJWT,
    authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
    notiController.creatNotification
)

/**
 * @swagger
 * /noti:
 *   get:
 *     summary: Get notifications (optionally filter by user_id)
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: user_id
 *         schema:
 *           type: integer
 *         description: ID of the user to filter notifications
 *     responses:
 *       200:
 *         description: Notifications fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Notifications fetched successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       user_id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: Important update
 *                       message:
 *                         type: string
 *                         example: Your request has been approved.
 *                       is_read:
 *                         type: boolean
 *                         example: false
 *                       created_at:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: No notifications found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get(
    "/noti",
    authenticateJWT,
    authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN), notiController.getNotification
)

/**
 * @swagger
 * /noti/read/{id}:
 *   put:
 *     summary: Mark a notification as read by ID
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the notification
 *     responses:
 *       200:
 *         description: Notification marked as read
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Notification marked as read
 *                 data:
 *                   type: object
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Notification not found
 *       500:
 *         description: Internal server error
 */

router.put(
    "/noti/read/:id",
    authenticateJWT,
    authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
    notiController.readNotification
)


export default router