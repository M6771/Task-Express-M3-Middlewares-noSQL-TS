import express from "express";
import { createTag, getAllTags, addTagToPost } from "./tags.controllers";

const tagRouter = express.Router();

// Create a new tag
tagRouter.post("/", createTag);

// Get all tags
tagRouter.get("/", getAllTags);

// Add a tag to a post
tagRouter.post("/:postId/:tagId", addTagToPost);

export default tagRouter; 