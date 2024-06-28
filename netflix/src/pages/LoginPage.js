import React, { useEffect } from "react";
import Netflix_bg from "../assets/netflix_bg.png";
import Template from "../components/Template";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const user = useSelector((store) => store.auth.user);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
      navigate('/');
    }
  })
  return (
    <div className="text-black relative">
      <div className="absolute opacity-70 -z-10">
        <img src={Netflix_bg} alt="background banner" loading="lazy" />
      </div>

      <div className="mx-auto w-[400px] p-5 items-center ">
        <Template />
      </div>
    </div>
  );
};

export default LoginPage;
