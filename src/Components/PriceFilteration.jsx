import React, { useState } from 'react'

const PriceFilteration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [propertyType, setPropertyType] = useState("new");

  return (
    <>
      <div className="relative min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white shadow">
          <h1 className="text-xl font-semibold">DreamHome</h1>
          <button
            onClick={() => setIsOpen(true)} // 👈 This opens the popup
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Define Preferences
          </button>
        </header>

        {/* Modal Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            {/* Modal */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative animate-fadeIn">
              <button
                onClick={() => setIsOpen(false)} // 👈 Close modal
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
              >
                &times;
              </button>

              <h2 className="text-center text-2xl font-semibold mb-6">
                Define Your Dream Home Preferences
              </h2>

              {/* Property Type */}
              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => setPropertyType("new")}
                  className={`px-4 py-2 rounded-md font-medium ${
                    propertyType === "new"
                      ? "bg-teal-600 text-white"
                      : "border border-gray-300 text-gray-600"
                  }`}
                >
                  New
                </button>
                <button
                  onClick={() => setPropertyType("preowned")}
                  className={`px-4 py-2 rounded-md font-medium ${
                    propertyType === "preowned"
                      ? "bg-teal-600 text-white"
                      : "border border-gray-300 text-gray-600"
                  }`}
                >
                  Pre-Owned
                </button>
              </div>

              {/* Budget Range */}
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-1">
                  Budget Range
                </label>
                <input
                  type="range"
                  min="200000"
                  max="800000"
                  step="50000"
                  defaultValue="200000"
                  className="w-full accent-teal-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Min. $200,000</span>
                  <span>Max. $800,000</span>
                </div>
              </div>

              {/* Location */}
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

              {/* CTA */}
              <button className="bg-teal-600 w-full text-white py-3 rounded-md font-medium hover:bg-teal-700 transition">
                Continue to Pre-Qualification
              </button>

              <p className="text-center text-sm text-gray-500 mt-3 cursor-pointer hover:text-gray-700">
                Skip for now
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PriceFilteration;
