import express from "express";
import morgan from "morgan";
import path from "path";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import authorRoutes from "./api/posts/authors/authors.routes";
import tagRoutes from "./api/posts/tags/tags.routes";
import { notFound } from "./middlewares/notFound.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";


const app = express();
const PORT = 8000;


// Body parser middleware
app.use(express.json());

// Morgan logging middleware
app.use(morgan("dev"));

// Static media folder - serves uploaded files
app.use("/media", express.static(path.join(__dirname, "../media")));

// Routes
app.use("/posts", postsRoutes);
app.use("/authors", authorRoutes);
app.use("/tags", tagRoutes);

// Error handling middlewares (MUST BE LAST!)
app.use(notFound);        // Catches 404 errors
app.use(errorHandler);    // Catches all other errors

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});