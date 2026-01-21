import express from "express";
import { createPost, getPosts, updatePost, deletePost } from "./posts.controller";
import { upload } from "../../middlewares/multer.middleware";
import { validatePost, handleValidationErrors } from "../../middlewares/postValidation.middleware";

const postRouter = express.Router();

// Create a new post with optional image upload
// Order: multer first (parses form-data), then validation, then controller
postRouter.post("/", upload.single("image"), ...validatePost, handleValidationErrors, createPost);

// Get all posts (no changes needed)
postRouter.get("/", getPosts);

// Update a post
postRouter.put("/:id", updatePost);
// Delete a post
postRouter.delete("/:id", deletePost);

export default postRouter;