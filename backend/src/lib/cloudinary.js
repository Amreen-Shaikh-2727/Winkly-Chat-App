import {v2 as cloudinary} from "cloudinary";
import {config} from "dotenv";

config();

console.log({
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secretLength: process.env.CLOUDINARY_API_SECRET?.length,
  secretFirst5: process.env.CLOUDINARY_API_SECRET?.slice(0, 5),
  secretLast5: process.env.CLOUDINARY_API_SECRET?.slice(-5),
});

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


export default cloudinary;
