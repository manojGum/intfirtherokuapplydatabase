const User = require("../models/user.register.models");
var jwt = require('jsonwebtoken');
require('dotenv').config()
// const User = require("../models/user.login.model")

const generateToken=(user)=>{
    // return user._id + "xyz"
    return  jwt.sign({user}, process.env.SECRET_KEY_ACCESS, { expiresIn: '30s' });
}

const genrateRefreshToken=(user)=>{
    return  jwt.sign({user}, process.env.SECRET_KEY_REFRESH , { expiresIn: '1h' });
}


const login= async (req,res)=>{
    try{
        console.log(req.body.email)
        const user= await User.findOne({email:req.body.email});
        // checked if mail exists
            if(!user){
                return res.status(400).send({message:"wrong Email or Password"})
            }
            // if email exists , check password
            const match=user.checkpassword(req.body.password)
            if(!match){
                return res.status(400).send({message: "wrong Email or Password"})
            }
            // if match 
            // console.log(process.env.SECRET_KEY_ACCESS)
            const accesstoken=generateToken(user)
            const refreshtoken=genrateRefreshToken(user)
            // res.cookie('accesstoken', accesstoken,{
            //     httpOnly:true,
            //     Secure:true,
            //     maxAge:60*1000  //1 min
                
            // });
            // res.cookie('refreshtoken', refreshtoken,{
            //     httpOnly:true,
            //     Secure:true,
            //     maxAge:60*60*1000  // 1h
               
            // });
            return res.status(200).send({user ,accesstoken,refreshtoken},);
      
     }
            catch(err){
                res.status(400).send(err.message)
            } 
}

module.exports=login