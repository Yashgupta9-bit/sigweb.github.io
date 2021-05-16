const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minLength:3
    },
    Email:{
        type: String,
        required:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid emial id")
            }
        }
    },
    Phone:{
        type:Number,
        required:true,
        min:10
    },

    Message:{
        type:String,
        required:true,
        minLength:3
    },
})

// collection
const User = mongoose.model("User",userSchema);

module.exports = User;