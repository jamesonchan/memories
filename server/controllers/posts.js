import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

// @desc fetch all posts
// @route GET /api/posts
// @access Public
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc fetch post by id
// @route GET /api/posts/:id
// @access Public
export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const postMessage = await PostMessage.findById(id);
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc create posts
// @route POST /api/posts
// @access Public
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//@desc update posts
// @route patch /api/posts/:id
// @access Public
export const updatePosts = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

//@desc delete posts
// @route delete /api/posts/:id
// @access Public
export const deletePostById = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(_id);

  res.json({ message: "Post deleted successfully!" });
};

//@desc like posts
// @route put /api/posts/:id/likePost
// @access Public
export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const post = await PostMessage.findById(_id);

  const likeIndex = post.likes.findIndex((id) => id === String(req.userId));

  if (likeIndex === -1) {
    //like the post
    post.likes.push(req.userId);
  } else {
    //displike a post
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
