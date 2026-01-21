import Tag from "../../../models/Tag";
import Post from "../../../models/Post";
import { Request, Response } from "express";

// Create a new tag
export const createTag = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const tag = await Tag.create({ name });
        res.status(201).json(tag);
    } catch (error) {
        res.status(500).json({ message: "Error creating tag" });
    }
};

// Get all tags
export const getAllTags = async (req: Request, res: Response) => {
    try {
        const tags = await Tag.find().populate("posts");
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tags" });
    }
};

// Add a tag to a post
export const addTagToPost = async (req: Request, res: Response) => {
    try {
        const { postId, tagId } = req.params;

        // Check if post and tag exist
        const post = await Post.findById(postId);
        const tag = await Tag.findById(tagId);

        if (!post) {
            res.status(404).json({ message: "Post not found" });
            return;
        }

        if (!tag) {
            res.status(404).json({ message: "Tag not found" });
            return;
        }

        // Push tagId into post.tags array 
        await Post.findByIdAndUpdate(
            postId,
            { $push: { tags: tagId } },
            { new: true }
        );

        // Push postId into tag.posts array
        await Tag.findByIdAndUpdate(
            tagId,
            { $push: { posts: postId } },
            { new: true }
        );

        res.status(200).json({ message: "Tag added to post successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding tag to post" });
    }
};