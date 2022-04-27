import express from "express";
import {
  createPosts,
  deletePostById,
  getPostById,
  getPosts,
  updatePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);
router.route("/:id").put(updatePosts).get(getPostById).delete(deletePostById);

export default router;
