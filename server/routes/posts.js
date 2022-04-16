import express from "express";
import { createPosts, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getPosts).post(createPosts);

export default router;
