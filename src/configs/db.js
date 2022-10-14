const mongoose = require("mongoose");
module.exports =()=>{
    return mongoose.connect(
        "mongodb+srv://intassignment:intassignment@cluster0.njtayf5.mongodb.net/newdata?retryWrites=true&w=majority"
    )
}