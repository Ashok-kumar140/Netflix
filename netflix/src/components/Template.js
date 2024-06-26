import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({heading,formType}) => {
    
  return (
    <>
        <div className='mt-60 absolute bg-black opacity-85 w-[400px] mx-auto flex flex-col items-center justify-center rounded-md'>
            <h1 className='text-white font-semibold text-xl mt-7'>{heading}</h1>
            {
                formType=== "Login" ? (
                    <LoginForm/>
                ):(
                    <SignupForm/>
                )
            }
            
        </div>
    </>
  )
}

export default Template