import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HouseList = () => {
  const [filter, setFilter] = useState("All");

  const houses = [
    { id: 1, type: "Apartment", price: 180000, location: "Karachi", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
    { id: 2, type: "Villa", price: 480000, location: "Lahore", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: 3, type: "Townhouse", price: 300000, location: "Islamabad", image: "https://images.unsplash.com/photo-1600585152907-9e8b1b96e1e2" },
    { id: 4, type: "Villa", price: 520000, location: "Karachi", image: "https://images.unsplash.com/photo-1600607687920-4e2a9622b4ce" },
    { id: 5, type: "Apartment", price: 200000, location: "Lahore", image: "https://images.unsplash.com/photo-1600585152969-199ea26cfe3b" },
  ];

  // Filtration logic
  const filteredHouses = filter === "All" ? houses : houses.filter((h) => h.type === filter);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a2a33] mb-4">🏡 Available Houses</h1>
        <p className="text-gray-600 mb-10">Filter by type to find your perfect home.</p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Apartment", "Villa", "Townhouse"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-md font-medium border transition ${
                filter === type
                  ? "bg-[#1ABC9C] text-white border-[#1ABC9C]"
                  : "bg-white border-gray-300 text-gray-700 hover:border-[#1ABC9C]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Filtered Houses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredHouses.map((house) => (
              <motion.div
                key={house.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={house.image}
                  alt={house.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-[#1a2a33]">
                    {house.type}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {house.location} • ${house.price.toLocaleString()}
                  </p>
                  <button className="mt-4 bg-[#1ABC9C] text-white px-4 py-2 rounded-md text-sm hover:bg-[#169c82] transition">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HouseList;
