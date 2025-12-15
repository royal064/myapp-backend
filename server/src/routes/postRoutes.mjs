import express from 'express';
import { createPost, getPosts, likePost, commentPost } from '../controllers/postController.mjs';
import { protect } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/create', protect, createPost);
router.get('/all', getPosts);
router.post('/like', protect, likePost);
router.post('/comment', protect, commentPost);

export default router;
