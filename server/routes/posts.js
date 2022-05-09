import express from "express";
import {
  createPosts,
  deletePostById,
  getPostById,
  getPosts,
  likePost,
  updatePosts,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getPosts).post(auth, createPosts);
router
  .route("/:id")
  .put(auth, updatePosts)
  .get(getPostById)
  .delete(auth, deletePostById);
router.route("/:id/likePost").put(auth, likePost);

export default router;
