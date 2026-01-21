import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    tags: [{ //Update Post Model to add tags
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
});

const Post = model("Post", PostSchema);
export default Post;