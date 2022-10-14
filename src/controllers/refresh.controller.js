const express = require("express")
require("dotenv").config();
const jwt = require("jsonwebtoken")
const router=express.Router();

router.post("",async(req,res)=>{
    const refreshToken=req.body.token;
    if(!refreshToken){
        return res.status(403).json({message:"Refresh token not found , login again"});
    }
    if(refreshToken===undefined)
    {
        return res.status(403).json({message:"Refresh token not found , login again"})
    }
    jwt.verify(refreshToken,process.env.SECRET_KEY_REFRESH,(err,user)=>{
        if(!err){
            console.log(user)
            const accessToken=jwt.sign({user}, process.env.SECRET_KEY_ACCESS, { expiresIn: '30s' });
            return res.status(201).json({success:true,accessToken});
        }else{
            return res.status(403).json({success:false,
            message:"Invailid refresh token or expire login again"
        });
    }
    
});
})
module.exports=router