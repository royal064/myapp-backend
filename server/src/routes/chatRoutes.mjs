import express from 'express';
import { getChat, sendMessage } from '../controllers/chatController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.get('/:userId', protect, getChat);
router.post('/send', protect, sendMessage);

export default router;
