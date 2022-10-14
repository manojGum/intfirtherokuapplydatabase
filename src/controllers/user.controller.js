const express = require("express")
const User = require("../models/user.register.models");
const router=express.Router();
const authenticate=require("../middlewares/authenticate")

// router.post("",authenticate,async(req,res)=>{
//     req.body.user_id=req.user.Id;
//     try{
//         const product = await Product.create(req.body);
//     return res.status(200).send(product)
//     }catch(err){
//         return res.status(400).send(err. message);
//     }
// })

router.get("",authenticate,async(req,res)=>{
    try{
        req.body.user=req.user
        console.log("user details found")
        // console.log("user details found", req.body)
        // const user = await User.find();
        // console.log(user)
        return res.status(200).send(req.body)
    }catch(err){
        return res.status(400).send(err. message);
    }
    
})
module.exports=router