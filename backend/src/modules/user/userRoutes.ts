import express from "express";
import * as userController from "../user/userController";

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.get("/users/:id/picture", userController.getInternPicture);

export default router;
