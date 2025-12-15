import Post from '../models/Post.mjs';

export const createPost = async (req, res) => {
  const post = await Post.create({ user: req.user, text: req.body.text });
  res.json(post);
};

export const getPosts = async (req, res) => {
  const posts = await Post.find().populate('user', 'name').sort({ createdAt: -1 });
  res.json(posts);
};

export const likePost = async (req, res) => {
  const post = await Post.findById(req.body.postId);
  if (!post.likes.includes(req.user)) post.likes.push(req.user);
  await post.save();
  res.json(post);
};

export const commentPost = async (req, res) => {
  const post = await Post.findById(req.body.postId);
  post.comments.push({ user: req.user, text: req.body.text });
  await post.save();
  res.json(post);
};
