import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequirementsForm = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("Select Property Type");
  const options = ["Apartment", "Villa", "Townhouse"];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-30 p-6 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-xl font-semibold text-[#1a2a33]">Your Requirements</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-[#1ABC9C] text-lg">
          ✕
        </button>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Preferred Location"
          className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none"
        />
        <input
          type="number"
          placeholder="Budget Range ($)"
          className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none"
        />

        {/* Animated Select Dropdown */}
        <div className="relative w-full">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-left focus:border-[#1ABC9C] focus:outline-none flex justify-between items-center"
          >
            <span>{selectedType}</span>
            <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 overflow-hidden"
              >
                {options.map((option, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSelectedType(option);
                      setIsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-[#1ABC9C] hover:text-white cursor-pointer text-gray-700 transition"
                  >
                    {option}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <textarea
          placeholder="Additional Notes"
          className="border border-gray-300 rounded-md px-4 py-2 focus:border-[#1ABC9C] focus:outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-[#1ABC9C] text-white py-2 rounded-md hover:bg-[#169c82] transition"
        >
          Submit Requirements
        </button>
      </form>
    </motion.div>
  );
};

export default RequirementsForm;
