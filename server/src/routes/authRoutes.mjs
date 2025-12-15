import express from 'express';
import { register, login, me } from '../controllers/authController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, me);

export default router;
