import express from 'express';
import { getUser, updateUser } from '../controllers/userController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/:id', getUser);
router.post('/update', protect, updateUser);

export default router;
