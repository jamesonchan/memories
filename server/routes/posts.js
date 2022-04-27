import express from "express";
import {
  createPosts,
  getPostById,
  getPosts,
  updatePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);
router.route("/:id").put(updatePosts).get(getPostById);

export default router;
