import express from "express";
const router = express.Router()


//signup
router.get("/signup",(req,res)=>{
    res.send("signup route")
})

//login
router.get("/login",(req,res)=>{
    res.send("login route")
})

//logout
router.get("/logout",(req,res)=>{
    res.send("logout route")
})
export default router;