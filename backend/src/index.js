import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import cookieParser from "cookie-parser";

import {app,server} from "./lib/socket.js" 


import path from "path";

dotenv.config();
// const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve()

app.use(cookieParser()); 
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));  //allows u to save data out of body
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})
);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get('*splat', (req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

server.listen(PORT, ()=> {
    console.log("server is running on PORT:" + PORT);
    connectDB()
})