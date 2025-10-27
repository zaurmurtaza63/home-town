import React , {useState} from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from '../SiteImages/logo.png';
import PriceFilteration from "./PriceFilteration";
import ContractForms from "./ContractForms/ContractForms";

import { useAuthModal } from "../context/AuthModalContext";

const Header = () => {
const { openAuth } = useAuthModal();
const [isOpen, setIsOpen] = useState(false);
 const dropdownItems = ["Houses", "Flats", "Shops", "Plots"];
  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-2 px-10 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="h-[80px] w-[80px]">
      <a href="/">
         <img className="rounded-lg" src={Logo} alt="logo"></img>
      </a>
      </div>

      {/* Center Section - Navigation */}
    <nav className="hidden md:flex items-center justify-center gap-10 text-[15px] font-medium text-gray-700">
      <ul className="flex gap-6 relative">
        <li><a href="#" className="hover:text-[#0b2239] transition">Home</a></li>

        {/* New Properties Dropdown */}
        <li className="group relative">
          <button className="hover:text-[#0b2239] transition">New Properties ▾</button>
          <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-xl overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-top">
            {dropdownItems.map((item) => (
              <li key={item} className="">
                <a
                  href="#"
                  className="block px-5 py-2 text-gray-700 hover:bg-[#0b2239]/10 hover:text-[#0b2239] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>

        {/* Old Properties Dropdown */}
        <li className="group relative">
          <button className="hover:text-[#0b2239] transition">Old Properties ▾</button>
          <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-xl overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-top">
            {dropdownItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-5 py-2 text-gray-700 hover:bg-[#0b2239]/10 hover:text-[#0b2239] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>

        <li><a href="#" className="hover:text-[#0b2239] transition">Builders</a></li>
        <li><a href="#" className="hover:text-[#0b2239] transition">About Us</a></li>
        <li><a href="#" className="hover:text-[#0b2239] transition">Blogs</a></li>
        <li><a href="#" className="hover:text-[#0b2239] transition">Contact Us</a></li>
      </ul>
    </nav>
      {/* Right Section - Auth Buttons */}
      <div className="flex items-center gap-4">
        <button onClick={() => openAuth("login")} className="text-gray-700 hover:text-[#0b2239] transition font-medium hidden sm:inline">Login</button>
        <button
          onClick={() => openAuth("signup")}
          className="bg-[#0b2239] text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#15365c] transition"
        >
          Sign Up
        </button>
      </div>
    </header>
    <PriceFilteration isOpen={isOpen} setIsOpen={setIsOpen}>
      <ContractForms onDone={() => setIsOpen(false)} />
    </PriceFilteration>
    </>
  );
};

export default Header;
