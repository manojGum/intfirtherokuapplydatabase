const mongoose =require("mongoose");
const bcrypt=require('bcrypt')


const loginSchema=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password: {type:String, required:true}
},{
    versionKey : false,
timestamps : true,
})



// loginSchema.pre("save", function(next){
    
//     const hash=bcrypt.hashSync(this.password, 2);
//     this.password=hash;
//     return next();
// })


const login=mongoose.model("user",loginSchema)
module.exports=login;






