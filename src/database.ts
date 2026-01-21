import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGODB_URI from env:", process.env.MONGODB_URI);
console.log("All env vars:", Object.keys(process.env).filter(key => key.includes('MONGO')));
console.log(process.env.MONGODB_URI);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || "");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;