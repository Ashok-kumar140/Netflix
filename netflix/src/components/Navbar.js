import React from "react";
import { CgProfile } from "react-icons/cg";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className=" fixed z-10 w-full flex items-center justify-between p-2 bg-gradient-to-br">
      <img
        width={100}
        src={logo}
        alt="Netflix Logo"
        loading="lazy"
      />

      <div className="flex items-center gap-3">
        <div className="flex gap-1 items-center text-white font-bold text-xl">
          <CgProfile width={30} height={30} />
          <p>Ashok</p>
        </div>
        <button className="bg-red-600 p-2 rounded-md text-white">Logout</button>
        <button className="bg-red-600 p-2 rounded-md text-white">
          Search Movies
        </button>
      </div>
    </div>
  );
};

export default Navbar;
