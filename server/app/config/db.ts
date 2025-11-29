import mongoose from "mongoose";

 export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export const DisConnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log(`DB Disconnected Sucessfully!`);
  } catch (error) {
    console.error("MongoDB Disconnection error:", error);
    process.exit(1);
  }
}