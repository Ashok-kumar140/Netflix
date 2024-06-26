import React, { useState } from 'react'

const SignupForm = () => {

    const [loading,setLoading]  = useState(false);
    const [formData,setFormData] = useState({
        email:"",
        password:"",
        userName:""
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
   <>
   <form className='flex flex-col gap-2' onSubmit={handleFormSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor='userName' className='label-style'>User Name: <sup className='text-red-700'>*</sup></label>
                    <input type='text' id='userName' name='userName' placeholder='Enter your username' 
                    value={formData.userName}
                    onChange={handleOnChange}
                    className='input-field-style'/>
                </div>

                <div>
                    <label htmlFor='email' className='label-style'>User Email: <sup className='text-red-700'>*</sup></label>
                    <input type='email' id='email' name='email' placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleOnChange}
                    className='input-field-style'/>
                </div>

                <div>
                    <label htmlFor='password' className='label-style'>User Password: <sup className='text-red-700'>*</sup></label>
                    <input type='text' id='password' name='password' placeholder='Enter your password' 
                    value={formData.password}
                    onChange={handleOnChange}
                    className='input-field-style'/>
                </div>
                <div className='flex items-center justify-center m-4'>
                    <button className='p-2 bg-red-500 rounded-md'>Sign Up</button>
                </div>
                <div className='text-white mb-2 text-center'>
                    <div>
                        Already have an account?<a className='text-blue-600'>Login</a>ƒ
                    </div>
                </div>
            </form>
   </>
  )
}

export default SignupForm