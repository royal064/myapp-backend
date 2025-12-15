import User from '../models/User.mjs';

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user, req.body, { new: true }).select('-password');
  res.json(user);
};
