import express from "express";
import {
  createPosts,
  deletePostById,
  getPostById,
  getPosts,
  likePost,
  updatePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);
router.route("/:id").put(updatePosts).get(getPostById).delete(deletePostById);
router.route("/:id/likePost").put(likePost);

export default router;
