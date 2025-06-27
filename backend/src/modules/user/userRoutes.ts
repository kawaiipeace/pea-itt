import express from "express";
import * as userController from "../user/userController";
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
router.get("/user/mentor", userController.getMentors);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update user and student profile (only by the user themselves)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - fname
 *               - lname
 *               - email
 *               - phone_number
 *               - department_id
 *               - mentor_id
 *               - university
 *               - start_date
 *               - end_date
 *             properties:
 *               fname:
 *                 type: string
 *                 example: John
 *               lname:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john.doe@example.com
 *               phone_number:
 *                 type: string
 *                 example: "0812345678"
 *               department_id:
 *                 type: integer
 *                 example: 1
 *               mentor_id:
 *                 type: integer
 *                 example: 2
 *               university:
 *                 type: string
 *                 example: Chulalongkorn University
 *               start_date:
 *                 type: string
 *                 format: date
 *                 example: 2025-06-01
 *               end_date:
 *                 type: string
 *                 format: date
 *                 example: 2025-10-01
 *               picture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: User and student profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User and student profile updated successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     fname:
 *                       type: string
 *                     lname:
 *                       type: string
 *                     email:
 *                       type: string
 *                     phone_number:
 *                       type: string
 *                     department_id:
 *                       type: integer
 *                     university:
 *                       type: string
 *                     mentor_id:
 *                       type: integer
 *                     start_date:
 *                       type: string
 *                       format: date
 *                     end_date:
 *                       type: string
 *                       format: date
 *       400:
 *         description: Invalid request (e.g. validation failed)
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       403:
 *         description: You are not authorized to update this user
 *       404:
 *         description: User not found
 *       409:
 *         description: Email or phone number already exists
 *       500:
 *         description: Internal server error
 */
router.put(
  "/users/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT),
  upload.single("picture"),
  userController.updateUsers
);

/**
 * @swagger
 * /users/admin/{id}:
 *   put:
 *     summary: Update user's department and/or mentor (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - department_id
 *             properties:
 *               department_id:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *               mentor_id:
 *                 type: integer
 *                 nullable: true
 *                 example: 5
 *     responses:
 *       200:
 *         description: User department and/or mentor updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User department and/or mentor updated successfully
 *       400:
 *         description: Validation error or bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       403:
 *         description: Forbidden - user is not admin
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.put(
  "/users/admin/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.ADMIN),
  userController.updateDeptMent
);

/**
 * @swagger
 * /users/admin/{id}:
 *   delete:
 *     summary: Delete a user by ID (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       403:
 *         description: Forbidden - user is not admin
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.delete(
  "/users/admin/:id",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.ADMIN),
  userController.deleteUser
);

export default router;
