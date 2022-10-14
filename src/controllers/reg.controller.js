const Register = require("../models/user.register.models");




const register= async(req,res)=>{
    try{
        let user=await Register.findOne({email:req.body.email});
        if(user){
            return res.status(400).send({message:"email already exists"})
        }else{
            console.log(req.body)
            user=await Register.create(req.body);

            return res.status(200).send({user})
        }
    }catch(err){
        res.status(400).send(err.message)
    }
}



module.exports= register