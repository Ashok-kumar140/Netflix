import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
const LoginForm = () => {
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading]  = useState(false);
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        setLoading(true);
        try{

        }catch(error){
            console.log("Error while logging in",error);
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
        <form className='flex flex-col gap-2' onSubmit={()=>handleFormSubmit()}>

                <div>
                    <label htmlFor='email' className='label-style'>User Email: <sup className='text-red-700'>*</sup></label>
                    <input type='email' id='email' name='email' placeholder='Enter your email' 
                    value={formData.email}
                    onChange={handleOnChange}
                    className='input-field-style'/>
                </div>

                <div className='relative'>
                    <label htmlFor='password' className='label-style'>User Password: <sup className='text-red-700'>*</sup></label>
                    <input type='text' id='password' name='password' placeholder='Enter your password' 
                    value={formData.password}
                    onChange={handleOnChange}
                    className='input-field-style'/>
                    {
                        showPassword?(
                            <MdOutlineRemoveRedEye className='absolute top-[20%]'/>
                        ):(
                            <FaRegEyeSlash className='absolute top-0'/>
                        )
                    }
                </div>
                <div className='flex items-center justify-center m-4'>
                    <button className='p-2 bg-red-500 rounded-md' type='submit'>Sign In</button>
                </div>
                <div className='text-white mb-2 text-center'>
                    <div>
                        New User?<a className='text-blue-600'>SignUp</a>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default LoginForm