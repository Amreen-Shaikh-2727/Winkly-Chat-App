import jwt from "jsonwebtoken";
import User  from "../models/user.model.js";

export const protectRoute = async (req,res , next) =>{
    try{
        const token = req.cookies.jwt;

        if(!token){
         res.status(401).json({message: "unautherized- No Token Provided"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded){
        res.status(401).json({message: "unautherized- Invalid Token"});

        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
         res.status(404).json({message: "unautherized- No Token Provided"});
        }

        req.user = user

        next()

    }catch (error){
        console.log("Error is protectRoute middleware", error.message);
        return res.status(500).json({message: "Internal server error"});
    }
}