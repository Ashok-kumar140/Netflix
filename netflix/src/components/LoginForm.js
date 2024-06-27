import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { userEndPoints } from '../utils/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/slices/authSlice';

const LoginForm = ({setIsLogin}) => {
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading]  = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{

            const {data} = await axios.post(userEndPoints.LOGIN_API, formData);

            console.log("DATA",data);

            if (!data.success) {
                throw new Error(data);
            }

            toast.success("Logged In Successfully");
            dispatch(setToken(data?.user?.token));

            dispatch(setUser(data?.user))
            localStorage.setItem("token", JSON.stringify(data?.user?.token));
            localStorage.setItem("user", JSON.stringify(data?.user));
            navigate('/');

        }catch(error){
            console.log("Error while logging in",error);
            toast.error(error.response.data.message)
        }
        setLoading(false);
    }

    const handleOnChange = (e)=>{

        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }))

    }
    
  return (
    <div>
        <form className='flex flex-col gap-2' onSubmit={handleFormSubmit}>

                <div>
                    <label htmlFor='email' className='label-style'>User Email: <sup className='text-red-700'>*</sup></label>
                    <input type='email' id='email' name='email' placeholder='Enter your email' 
                    value={formData.email}
                    onChange={handleOnChange}
                    required
                    className='input-field-style'/>
                </div>

                <div className='relative'>
                    <label htmlFor='password' className='label-style'>User Password: <sup className='text-red-700'>*</sup></label>
                    <input type='text' id='password' name='password' placeholder='Enter your password' 
                    value={formData.password}
                    onChange={handleOnChange}
                    required
                    className='input-field-style'/>
                    {
                        showPassword?(
                            <MdOutlineRemoveRedEye className='absolute top-[20%]'/>
                        ):(
                            <FaRegEyeSlash className='absolute top-0'/>
                        )
                    }
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button className='py-2 bg-red-500 rounded-md cursor-pointer w-[100%]' >{loading?("Loading..."):("Sign In")}</button>
                </div>
                <div className='text-white mb-2 text-center'>
                    <div className='flex items-center justify-center'>
                        New User?<p onClick={()=>setIsLogin(false)} className='text-blue-600 cursor-pointer'>SignUp</p>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default LoginForm