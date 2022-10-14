const express = require('express');
const cors = require('cors')
const connect = require("./configs/db");
const register=require("./controllers/reg.controller")
const login = require("./controllers/log.controller")
const userController= require("./controllers/user.controller")
const refreshController=require("./controllers/refresh.controller")
// const geeting =require("./controllers/get.controller")
const app= express();

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json());


 
app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
app.post("/register",register)
app.post("/login",login)
app.use("/userdetails", userController)
app.use("/refresh",refreshController)





app.listen(PORT,async()=>{
    try{
        await connect();
        console.log(`listen on port ${PORT}`);
    }catch(err){
      
       return res.status(400).send(err.message);
    }
});