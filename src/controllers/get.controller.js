const Register = require("../models/user.register.models");




const getting= async(req,res)=>{
    try{
        let user=await Register.find();
            return res.status(400).send(user)
    }catch(err){
        res.status(400).send(err.message)
    }
}



module.exports= getting