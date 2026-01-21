import express from "express";
import { createAuthor, getAllAuthors } from "./authors.controller";

const authorRouter = express.Router();

// Create a new author
authorRouter.post("/", createAuthor);

// Get all authors
authorRouter.get("/", getAllAuthors);

export default authorRouter;