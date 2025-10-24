import React , {useState} from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from '../SiteImages/logo.png';
import PriceFilteration from "./PriceFilteration";

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="w-full bg-white shadow-sm py-2 px-10 flex items-center justify-between">
      {/* Left Section - Logo */}
      <div className="h-[80px] w-[80px]">
      <a href="/">
         <img className="rounded-lg" src={Logo} alt="logo"></img>
      </a>
      </div>

      {/* Center Section - Navigation */}
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-gray-700">
        <a href="#" className="hover:text-[#1ABC9C] transition uppercase">
          Communities
        </a>
        <div className="flex items-center gap-2">
  <PhoneIcon fontSize="small" className="text-[#1A2A33]" />
  <a
    href="tel:+923353853143"
    className="text-gray-700 hover:text-[#1ABC9C] transition"
  >
    PHONE +92 335 3853143
  </a>
</div>

          <div className="flex items-center gap-2">
  <PhoneIcon fontSize="small" className="text-[#1A2A33]" />
  <a
    href="tel:+923353853143"
    className="text-gray-700 hover:text-[#1ABC9C] transition uppercase"
  >
    International +92 335 3853143
  </a>
</div>
      </nav>

      <button onClick={() => setIsOpen(true)}
        className="bg-[#0b2239] text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-[#15365c] transition"
      >
        BOOK NOW
      </button>
    </header>
    <PriceFilteration isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
