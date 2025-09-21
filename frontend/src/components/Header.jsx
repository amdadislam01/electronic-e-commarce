import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars } from 'react-icons/fa6'
import {} from 'react-icons/tb'
import {} from 'react-icons/ri'


const Header = () => {
  return (
    <header className="max-padd-container w-full mb-2">
      <div className="flexBetween py-3">
        {/* Logo */}
        <Link to={"/"} className="flex flex-1 bold-28">
          ElectroPoint
        </Link>
        {/* Navbar */}
        <div className="flex-1">
          <Navbar containerStyles={'flex gap-x-5 xl:gap-x-7'} />
        </div>
        {/* Buttons */}
        <div className="flex-1 flex">
          {/* Menu Toggle */}
          <>
          <FaBars />
          </>
          {/* Cart */}
          <Link>
            <div className="">
              Cart
            </div>
          </Link>
          {/* User Profile */}
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
