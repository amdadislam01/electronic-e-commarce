import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {getCartCount, navigate} = useContext(ShopContext)
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  

  return (
    <header className="w-full mb-2">
      <div className="max-padd-container flexBetween py-3">
        {/* Logo */}
        <Link to={"/"} className="flex flex-1 bold-18 xl:bold-28">
          ElectroPoint
        </Link>

        {/* Navbar */}
        <div className="flex-1">
          <Navbar
            containerStyles={`${
              menuOpen
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                : "hidden xl:flex gap-x-5 xl:gap-x-12 font-medium bg-primary ring-1 ring-slate-900/5 rounded-full p-1"
            }`}
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Buttons */}
        <div className="flex-1 flex items-center justify-end gap-x-4 md:gap-x-6">
          {/* Menu Toggle */}
          {menuOpen ? (
            <FaBarsStaggered
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-xl"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="xl:hidden cursor-pointer text-xl"
            />
          )}

          {/* Cart */}
          <Link to={"/cart"} className="flex relative">
            <div className="relative text-[27px] ring-1 ring-slate-900 rounded-full px-3 bold-18">
              Cart
              <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
                {getCartCount()}
              </span>
            </div>
          </Link>

          {/* User Profile */}
          <div className="group relative">
            <button onClick={() => navigate('/login')} className="btn-dark flexCenter gap-x-2">
              Login <RiUserLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
