import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_DB_URI || process.env.MONGO_URI || "mongodb://127.0.0.1:27017/revise_cravings";

        const conn = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log("Mongo DB connected successfully");
        console.log("DB Host:", conn.connection.host);
        console.log("DB Name:", conn.connection.name);
    } catch (error) {
        console.error("Mongo DB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;