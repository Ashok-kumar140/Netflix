import React from "react";
import { CgProfile } from "react-icons/cg";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../redux/slices/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setToggle } from "../redux/slices/movieSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { toggle } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/login");
  };

  const hanldeSearchBtn = () => {
    dispatch(setToggle());
  };
  return (
    <div className=" fixed z-30 w-full flex items-center justify-between p-2 bg-gradient-to-br from-black">
      <img width={100} src={logo} alt="Netflix Logo" loading="lazy" onClick={()=>{ if(toggle) hanldeSearchBtn(); navigate('/')}} />

      {user && (
        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center text-white font-bold text-xl">
            <CgProfile width={30} height={30} />
            <p>{user.userName}</p>
          </div>
          <button
            className="bg-red-600 p-2 rounded-md text-white"
            onClick={hanldeLogout}
          >
            Logout
          </button>
          {toggle ? (
            <button
              className="bg-red-600 p-2 rounded-md text-white"
              onClick={hanldeSearchBtn}
            >
              Home
            </button>
          ) : (
            <button
              className="bg-red-600 p-2 rounded-md text-white"
              onClick={hanldeSearchBtn}
            >
              Search Movies
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
