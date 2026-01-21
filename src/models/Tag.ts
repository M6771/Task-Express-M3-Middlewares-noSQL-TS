import { Schema, model } from "mongoose";

const TagSchema = new Schema<'ITag'>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
});

const Tag = model("Tag", TagSchema);
export default Tag;