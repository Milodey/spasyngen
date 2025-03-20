import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI as string; // Read MongoDB URI from .env.local

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("✅ MongoDB already connected");
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, {
            dbName: 'Location', // Replace with your actual database name
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
    }
};
