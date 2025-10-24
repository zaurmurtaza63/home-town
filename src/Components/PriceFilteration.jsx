import React, { useState } from "react";
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `${value}°C`;
}

const PriceFilteration = ({ isOpen, setIsOpen, children }) => {
    const [propertyType, setPropertyType] = useState("new");
    const [value, setValue] = useState([200000, 800000]);

    // If popup is closed, don’t render anything
    if (!isOpen) return null;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
                    <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative animate-fadeIn">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
                        >
                            &times;
                        </button>

                        {/* If children are provided, render them (used for contract forms). Otherwise render the default price filter UI. */}
                        {children ? (
                            <div className="w-full">{children}</div>
                        ) : (
                            <>
                                <h2 className="text-center text-2xl font-semibold mb-6">
                                    Define Your Dream Home Preferences
                                </h2>

                                {/* Property Type Buttons */}
                                <div className="flex justify-center gap-4 mb-4">
                                    <button
                                        onClick={() => setPropertyType("new")}
                                        className={`px-4 py-2 rounded-md font-medium transition ${propertyType === "new"
                                            ? "bg-teal-600 text-white"
                                            : "border border-gray-300 text-gray-600"
                                            }`}
                                    >
                                        New
                                    </button>
                                    <button
                                        onClick={() => setPropertyType("preowned")}
                                        className={`px-4 py-2 rounded-md font-medium transition ${propertyType === "preowned"
                                            ? "bg-teal-600 text-white"
                                            : "border border-gray-300 text-gray-600"
                                            }`}
                                    >
                                        Pre-Owned
                                    </button>
                                </div>
                                <div>
                                    <h3 className="mt-5 text-2xl font-semibold">Budget</h3>
                                </div>

                                {/* Budget Range */}
                                <Slider
                                    min={20000}
                                    max={100000}
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    sx={{
                                        color: "#0D9488"
                                    }}
                                />
                                <div className="text-lg font-medium flex justify-between mb-6">
                                    <span>Min: ${value[0]}</span>
                                    <span>Max: ${value[1]}</span>
                                </div>

                                {/* Location Field */}
                                <input
                                    type="text"
                                    placeholder="City, State or Zip Code"
                                    className="w-full border rounded-md p-2 mb-4 focus:ring-2 focus:ring-teal-500 outline-none"
                                />

                                {/* Property Size & Bedrooms */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <select className="border rounded-md p-2 focus:ring-2 focus:ring-teal-500 outline-none">
                                        <option>Min. 1,500 Ft²</option>
                                        <option>Min. 2,000 Ft²</option>
                                        <option>Min. 3,000 Ft²</option>
                                    </select>
                                    <input
                                        type="number"
                                        placeholder="3"
                                        className="border rounded-md p-2 focus:ring-2 focus:ring-teal-500 outline-none"
                                    />
                                </div>

                                {/* CTA Buttons */}
                                <button className="bg-teal-600 w-full text-white py-3 rounded-md font-medium hover:bg-teal-700 transition">
                                    Continue to Pre-Qualification
                                </button>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="block mx-auto text-center text-sm text-gray-500 mt-3 cursor-pointer hover:text-gray-700"
                                >
                                    Skip for now
                                </button>
                            </>
                        )}
                    </div>
        </div>
    );
};

export default PriceFilteration;
