import express from "express";
import { upload } from "../../common/middleware/upload";
import * as authController from "./authController";
import { authenticateJWT } from "../../common/middleware/authenticateJWT";
import {
  authorizeRoles,
  ROLE_IDS,
} from "../../common/middleware/authorizeRoles";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and session management
 */

/**
 * @swagger
 * /register/student:
 *   post:
 *     summary: Register a new student
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - department_id
 *               - fname
 *               - lname
 *               - phone_number
 *               - email
 *               - password_hash
 *               - university
 *               - start_date
 *               - end_date
 *             properties:
 *               picture:
 *                 type: string
 *                 format: binary
 *                 description: Optional profile picture
 *               department_id:
 *                 type: integer
 *                 example: 1
 *               fname:
 *                 type: string
 *                 example: Apiwat
 *               lname:
 *                 type: string
 *                 example: Lantong
 *               phone_number:
 *                 type: string
 *                 example: "0812345678"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: apiwat@example.com
 *               password_hash:
 *                 type: string
 *                 example: mypassword123
 *               mentor_id:
 *                 type: integer
 *                 example: 2
 *                 nullable: true
 *               university:
 *                 type: string
 *                 example: Kasetsart University
 *               start_date:
 *                 type: string
 *                 format: date
 *                 example: "2024-06-01"
 *               end_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-03-31"
 *     responses:
 *       201:
 *         description: Student registered successfully
 *       400:
 *         description: Validation error or invalid input data
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post(
  "/register/student",
  upload.single("picture"),
  authController.registerStu
);

/**
 * @swagger
 * /register/mentor:
 *   post:
 *     summary: Register a new mentor (Admin only)
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - department_id
 *               - fname
 *               - lname
 *               - phone_number
 *               - email
 *               - password_hash
 *             properties:
 *               department_id:
 *                 type: integer
 *                 minimum: 1
 *                 description: Department ID must be greater than 0
 *                 example: 1
 *               fname:
 *                 type: string
 *                 minLength: 2
 *                 description: First name must be at least 2 characters
 *                 example: John
 *               lname:
 *                 type: string
 *                 minLength: 2
 *                 description: Last name must be at least 2 characters
 *                 example: Doe
 *               phone_number:
 *                 type: string
 *                 minLength: 10
 *                 description: Phone number must be at least 10 digits
 *                 example: "0812345678"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Valid email format
 *                 example: john.doe@example.com
 *               password_hash:
 *                 type: string
 *                 minLength: 6
 *                 description: Password must be at least 6 characters
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Mentor registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Mentor registered successfully
 *       400:
 *         description: Validation error or invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 *                 errors:
 *                   type: object
 *       401:
 *         description: Unauthorized - invalid or missing token
 *       403:
 *         description: Forbidden - insufficient role (Admin only)
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Email already exists
 *       500:
 *         description: Internal server error
 */
router.post(
  "/register/mentor",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.ADMIN),
  authController.registerMentor
);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               phone_number:
 *                 type: string
 *                 example: "0812345678"
 *               password_hash:
 *                 type: string
 *                 example: mypassword123
 *             oneOf:
 *               - required: ["email", "password_hash"]
 *               - required: ["phone_number", "password_hash"]
 *     responses:
 *       200:
 *         description: Login successful, JWT token returned in cookie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful. Welcome back, Apiwat!
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /me:
 *   get:
 *     summary: Get current logged-in user information with profile
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User info retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello ,World
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     role_id:
 *                       type: integer
 *                       example: 1
 *                     fname:
 *                       type: string
 *                       example: Apiwat
 *                     lname:
 *                       type: string
 *                       example: Lantong
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: apiwat@example.com
 *                     student_profile:
 *                       type: object
 *                       nullable: true
 *                       properties:
 *                         mentor_id:
 *                           type: integer
 *                           example: 2
 *                         picture:
 *                           type: string
 *                           format: binary
 *                           nullable: true
 *                         university:
 *                           type: string
 *                           example: Kasetsart University
 *                         start_date:
 *                           type: string
 *                           format: date
 *                           example: "2024-06-01"
 *                         end_date:
 *                           type: string
 *                           format: date
 *                           example: "2025-03-31"
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/me",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  authController.me
);

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout the current user
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       401:
 *         description: Unauthorized
 */
router.get(
  "/logout",
  authenticateJWT,
  authorizeRoles(ROLE_IDS.STUDENT, ROLE_IDS.MENTOR, ROLE_IDS.ADMIN),
  authController.logout
);

export default router;
