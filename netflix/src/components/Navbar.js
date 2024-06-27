import React from "react";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/slices/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {user} = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeLogout = ()=>{
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/login")
  }
  return (
    <div className=" fixed z-10 w-full flex items-center justify-between p-2 bg-gradient-to-br">
      <img width={100} src={logo} alt="Netflix Logo" loading="lazy" />

      {user && (
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center text-black font-bold text-xl">
            <CgProfile width={30} height={30} />
            <p>{user.userName}</p>
          </div>
          <button className="bg-red-600 p-2 rounded-md text-white" onClick={hanldeLogout}>
            Logout
          </button>
          <button className="bg-red-600 p-2 rounded-md text-white">
            Search Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
