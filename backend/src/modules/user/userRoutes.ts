import express from 'express';
import { getAllUsers, getUserById,updateUserById } from '../user/userController';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById); 
router.put('/:id', updateUserById);

export default router;
