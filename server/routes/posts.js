import express from "express";
import { createPosts, getPosts, updatePosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts).put(updatePosts);

export default router;
