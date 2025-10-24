import React from "react";
import { motion } from "framer-motion";


const PreQualifyForm = ({ onClose }) => {
return (
<motion.div
initial={{ x: "100%" }}
animate={{ x: 0 }}
exit={{ x: "100%" }}
transition={{ duration: 0.5, ease: "easeInOut" }}
className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-30 p-6 overflow-y-auto"
>
<div className="flex justify-between items-center mb-4 border-b pb-2">
<h2 className="text-xl font-semibold text-[#1a2a33]">Pre-Qualification</h2>
<button onClick={onClose} className="text-gray-500 hover:text-[#1ABC9C] text-lg">✕</button>
</div>
<form className="flex flex-col gap-4">
<input type="text" placeholder="Full Name" className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none" />
<input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none" />
<input type="number" placeholder="Annual Income ($)" className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none" />
<input type="number" placeholder="Credit Score" className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none" />
<textarea placeholder="Notes (Optional)" className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none"></textarea>
<button className="bg-[#1ABC9C] text-white py-2 rounded-md hover:bg-[#169c82] transition">Pre-Qualify Now</button>
</form>
</motion.div>
);
};


export default PreQualifyForm;