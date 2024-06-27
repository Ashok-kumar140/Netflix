import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <>
        <div className='mt-60 absolute bg-black opacity-85 w-[400px] mx-auto flex flex-col items-center justify-center rounded-md'>
            <h1 className='text-white font-semibold text-xl mt-7'>{isLogin?("Sign In"):("Sign Up")}</h1>
            {
                isLogin ? (
                    <LoginForm setIsLogin={setIsLogin}/>
                ):(
                    <SignupForm setIsLogin={setIsLogin}/>
                )
            }
            
        </div>
    </>
  )
}

export default Template