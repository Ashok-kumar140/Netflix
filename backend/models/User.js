const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        trim: true
    },
    
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,

    },
   
    token:{
        type:String
    },
    tokenExpires:{
        type:Date,
    },

},{timestamps:true});

module.exports = mongoose.model("User", UserSchema);