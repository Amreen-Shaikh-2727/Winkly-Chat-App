import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req,res) => {
    const {fullName,email,password} = req.body
    try{
        
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"});

        }
        
        if (password.length<6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }
        const user = await User.findOne({email})         //this gonna find the user with model
         
        if (user) return res.status(400).json({message: "Email already exist"});

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            fullName,   //short form of fullName :fullName,
            email,
            password: hashedPassword
        })
        
        if(newUser){
            // generate jwt token here
            await newUser.save();
            generateToken(newUser._id,res);
            

            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            })
        }else{
            res.status(400).json({message : "Invalid user data"});
        }


    }catch(error){
        console.log("Error in signup controller",error.message);
        res.status(500).json({message : "Internal Server Error"})

    }
};

export const login = async (req,res) => {
    const {email,password} =  req.body;
    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Invelid credentials"});
        }

       const isPasswordCorrect = await bcrypt.compare(password,user.password);
       if(!isPasswordCorrect) {
        return res.status(400).json({message: "Invelid credentials"});
       }

        generateToken(user._id,res)

        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email:user.email,
            profilePic : user.profilePic,
        })

    }catch (error){
        console.log("error in login controller",error.message);
            return res.status(500).json({message:"Internal server error"});

    }
};

export const logout = (req,res) => {
    try{
        res.cookie("jwt","",{maxAge: 0});
            return res.status(200).json({message:"Logges out successfully"});

    }catch{
        console.log("Error in logout controller",error.message);
        return res.status(500).json({message:"Internal server error"});

    }
};