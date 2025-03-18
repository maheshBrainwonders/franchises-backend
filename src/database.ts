import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./utils/winston";

dotenv.config();

const mongoURL = process.env.MONGODB_URI;

if (!mongoURL) {
    console.error("MongoDB connection string is missing. Please check your .env file.");
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        logger.info("MongoDB Connected...");
    } catch (error) {
        logger.error("❌ MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
