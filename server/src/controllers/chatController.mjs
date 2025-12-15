import Message from '../models/Message.mjs';

export const getChat = async (req, res) => {
  const messages = await Message.find({
    $or: [
      { sender: req.user, receiver: req.params.userId },
      { sender: req.params.userId, receiver: req.user }
    ]
  }).sort('createdAt');

  res.json(messages);
};

export const sendMessage = async (req, res) => {
  const msg = await Message.create({
    sender: req.user,
    receiver: req.body.receiverId,
    text: req.body.text
  });
  res.json(msg);
};
