import mongoose from "mongoose";

export const dbConnection = () => {
const MONGO_URI = 'mongodb+srv://vishal:giri@cluster0.sotiin8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  mongoose
    .connect(MONGO_URI, {
      dbName: "TASK_MANAGEMENT_DB",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database! : ${err}`);
    });
};
