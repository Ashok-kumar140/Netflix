import React, { useState } from "react";
import { userEndPoints } from "../utils/api";
import axios from "axios";
import toast from 'react-hot-toast'
const SignupForm = ({setIsLogin}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post(userEndPoints.SIGNUP_API, formData);
      // console.log("DATA",data);

      if(!data.success){
        throw new Error(data);
      }
      toast.success("Signup Successfully");
      setIsLogin(true);
    } catch (error) {
      console.log("Error while logging in", error);
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  const handleOnChange = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="flex flex-col">
          <label htmlFor="userName" className="label-style">
            User Name: <sup className="text-red-700">*</sup>
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            required
            placeholder="Enter your username"
            value={formData.userName}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>

        <div>
          <label htmlFor="email" className="label-style">
            User Email: <sup className="text-red-700">*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>

        <div>
          <label htmlFor="password" className="label-style">
            User Password: <sup className="text-red-700">*</sup>
          </label>
          <input
            type="text"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleOnChange}
            className="input-field-style"
          />
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="py-2 bg-red-500 cursor-pointer rounded-md w-[100%]">{loading?("Loading..."):("Sign Up")}</button>
        </div>
        <div className="text-white mb-2 text-center">
          <div className='flex items-center justify-center'>
            Already have an account?<p onClick={()=>setIsLogin(true)} className="text-blue-600 cursor-pointer">Login</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
