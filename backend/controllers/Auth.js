const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.signupUser = async(req,res)=>{
    try{
        const {email,userName,password} = req.body;
        

        if(!email || !userName || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }

        const userExists = await User.findOne({email:email});
        if(userExists){
            return res.status(401).json({
                success:false,
                message:"User already exist"
            })
        }
        

        const hashedPassword = await bcryptjs.hash(password, 10);
        console.log("HELLO")
        const newUser = new User({
            email:email,
            password:hashedPassword,
            userName:userName
        });

        await newUser.save();

        return res.status(200).json({
            success:true,
            message:"User signup successfully",
            newUser
        });

    }catch(error){
        return res.status(500).json({
            sucess:false,
            message:"Error in signup controller"
        })

    }
}


exports.loginUser = async(req,res)=>{
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not Registered"
            })
        }

        if (!await bcryptjs.compare(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: "password is wrong"
            })
        }

        const payload = {
            email: email,
            id: user._id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "24h" })

        // user = user.toObject();

        user.token = token;
        user.password = undefined;
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        return res.cookie("token", token, options).status(200).json({
            success: true,
            message: "user logged in successfully",
            user
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Login failure try again",

        })

    }
}

exports.logoutUser = async(req,res)=>{
    try{

    }catch(error){

    }
}