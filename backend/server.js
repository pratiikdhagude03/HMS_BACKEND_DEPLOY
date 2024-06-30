import { config } from "dotenv";
config({ path: "./config/config.env" }); // Load environment variables

import app from "./app.js";
import cloudinary from "cloudinary";

const IP = process.env.IP || '127.0.0.1'; // Default to localhost if IP is not defined
const PORT = process.env.PORT || 3000;

// Log environment variables to debug
console.log("Environment Variables:");
console.log(`IP: ${process.env.IP}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`CLOUDINARY_CLOUD_NAME: ${process.env.CLOUDINARY_CLOUD_NAME}`);
console.log(`CLOUDINARY_API_KEY: ${process.env.CLOUDINARY_API_KEY}`);
console.log(`CLOUDINARY_API_SECRET: ${process.env.CLOUDINARY_API_SECRET}`);

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(PORT, IP, () => {
    console.log(`Server listening on http://${IP}:${PORT}`);
});
