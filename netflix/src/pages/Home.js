import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const Home = () => {

  const {user} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  console.log("USER",user);
  useEffect(()=>{
    if(!user){
      navigate('/login');
    }
  },[])
  return (
    <div className="text-black relative">
        
    </div>
  )
}

export default Home;