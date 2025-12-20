import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error?.message || error);
    // Fail-fast: surface the error so process manager (Render) restarts or fails the deployment
    throw error;
  }
};