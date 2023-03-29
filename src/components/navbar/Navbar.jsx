import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#3CABDD] text-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9 md:hidden" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-4 py-6 md:text-white text-sm font-bold">
          <li>
            <Link to="/" className="py-7 inline-block" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>
              Dashboard
            </Link>
          </li>
          <NavLinks />
        </ul>
        
        <ul
          className={`
        md:hidden bg-[#3CABDD] fixed w-full top-40 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="pl-3">
            <Link to="/" className="py-7 inline-block">
              Dashboard
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;