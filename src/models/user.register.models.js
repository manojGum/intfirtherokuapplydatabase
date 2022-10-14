const mongoose =require("mongoose");
const bcrypt=require('bcrypt')


const registerSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password: {type:String, required:true}
},{
    versionKey : false,
timestamps : true,
})



registerSchema.pre("save", function(next){
    
    const hash=bcrypt.hashSync(this.password, 2);
    this.password=hash;
    return next();
})

registerSchema.methods.checkpassword=function(password){
    // this.password is that password which is hash 
    return bcrypt.compareSync(password, this.password)
}


const Register=mongoose.model("user",registerSchema)
module.exports=Register;






