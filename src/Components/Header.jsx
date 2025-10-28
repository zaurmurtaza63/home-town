import React , {useState} from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from '../SiteImages/logo.png';
import PriceFilteration from "./PriceFilteration";
import ContractForms from "./ContractForms/ContractForms";
import UserIcon from "../SiteImages/userIcon.svg"
import { useAuthModal } from "../context/AuthModalContext";

const Header = () => {
const { openAuth } = useAuthModal();
const [isOpen, setIsOpen] = useState(false);
 const dropdownItems = ["Houses", "Flats", "Shops", "Plots"];
  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-[25px] shadow-sm py-2 px-10 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="h-[80px] w-[80px]">
      <a href="/">
         <img className="rounded-lg" src={Logo} alt="logo"></img>
      </a>
      </div>

      {/* Center Section - Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-10 text-[15px] font-medium text-white">
      <ul className="flex gap-6 relative items-center">
        <li className="group relative">
          <a href="#" className="relative hover:text-white/80 transition py-1">
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>

        {/* New Properties Dropdown */}
    <li className="relative group">
  <button className="relative hover:text-white/80 transition py-1">
    New Properties ▾
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-xl overflow-hidden 
                 opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                 transition-all duration-300 ease-out origin-top">
    {dropdownItems.map((item) => (
      <li key={item}>
        <a
          href="#"
          className="block px-5 py-2 text-gray-700 hover:bg-white/10 hover:text-black transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</li>

      {/* old Properties Dropdown */}
    <li className="relative group">
  <button className="relative hover:text-white/80 transition py-1">
    Old Properties ▾
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  </button>

  {/* Dropdown Menu */}
  <ul className="absolute left-0 top-full mt-2 w-44 bg-white shadow-lg rounded-xl overflow-hidden 
                 opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                 transition-all duration-300 ease-out origin-top">
    {dropdownItems.map((item) => (
      <li key={item}>
        <a
          href="#"
          className="block px-5 py-2 text-gray-700 hover:bg-white/10 hover:text-black transition"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
</li>


        <li className="group relative">
          <a href="#" className="relative hover:text-white/80 transition py-1">Builders
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>
        <li className="group relative">
          <a href="#" className="relative hover:text-white/80 transition py-1">About Us
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>
        <li className="group relative">
          <a href="#" className="relative hover:text-white/80 transition py-1">Blogs
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>
        <li className="group relative">
          <a href="#" className="relative hover:text-white/80 transition py-1">Contact Us
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>
      </ul>
    </nav>
      {/* Right Section - Auth Buttons */}
      <div className= "flex items-center gap-2 bg-[#1ABC9C] px-4 py-3 rounded-lg text-white hover:cursor-pointer"onClick={() => openAuth("login")}>
        <span><img src={UserIcon} alt="user icon" /></span>
        <button className="text-white rounded-md font-medium text-sm">Login</button>/
        <button
          className="text-white rounded-md font-medium text-sm"
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
