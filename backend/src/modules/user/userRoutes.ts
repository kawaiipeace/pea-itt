import express from "express";
import * as userController from "../user/userController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management endpoints
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *       401:
 *         description: Unauthorized - invalid or missing token
 */
router.get(
  "/users",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  userController.getAllUsers
);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the user to get
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *       400:
 *         description: Invalid ID supplied
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       404:
 *         description: User not found
 */
router.get(
  "/users/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  userController.getUserById
);

/**
 * @swagger
 * /users/{id}/picture:
 *   get:
 *     summary: Retrieve a user's picture by user ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the user whose picture to get
 *     responses:
 *       200:
 *         description: User picture returned successfully
 *         content:
 *           image/jpeg:
 *             schema:
 *               type: string
 *               format: binary
 *       400:
 *         description: Invalid ID supplied
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       404:
 *         description: User or picture not found
 */
router.get(
  "/users/:id/picture",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  userController.getStuPicture
);

/**
 * @swagger
 * /user/mentor:
 *   get:
 *     summary: Retrieve all mentors with optional department filter
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: department_id
 *         schema:
 *           type: integer
 *         description: Filter mentors by department ID (optional)
 *         example: 1
 *     responses:
 *       200:
 *         description: A list of mentors.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       fname:
 *                         type: string
 *                         example: John
 *                       lname:
 *                         type: string
 *                         example: Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
 *                       phone_number:
 *                         type: string
 *                         example: "0812345678"
 *                       department:
 *                         type: object
 *                         properties:
 *                           dept_id:
 *                             type: integer
 *                             example: 1
 *                           dept_name:
 *                             type: string
 *                             example: IT Department
 *                       mentor_profile:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                 message:
 *                   type: string
 *                   example: Mentors retrieved successfully
 *       404:
 *         description: No mentors found
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       500:
 *         description: Internal server error
 */
router.get(
  "/user/mentor",
  userController.getMentors
);

export default router;
