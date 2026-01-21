import express from "express";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import authorRoutes from "./api/posts/authors/authors.routes";
import tagRoutes from "./api/posts/tags/tags.routes";

const app = express();
const PORT = 8000;


app.use(express.json());

app.use("/posts", postsRoutes);
app.use("/authors", authorRoutes);
app.use("/tags", tagRoutes);

connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});