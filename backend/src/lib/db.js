// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try{
//        const conn = await mongoose.connect(process.env.MONGODB_URI);
//        console.log(`MongoDB connected: ${conn.connection.host}`);
//     }catch (error){
//         console.log("MongoDB connection error :",error);
//     }
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("URI exists:", !!process.env.MONGODB_URI);

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};