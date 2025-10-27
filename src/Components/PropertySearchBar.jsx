import React, { useState } from "react";

const PropertySearchBar = () => {
  const [filters, setFilters] = useState({
    city: "Karachi",
    location: "",
    propertyType: "Homes",
    priceMin: "0",
    priceMax: "Any",
    areaMin: "0",
    areaMax: "Any",
    beds: "All",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFind = () => {
    console.log("Searching with filters:", filters);
    alert(`Searching properties in ${filters.city}`);
  };

  return (
    <div className="flex flex-col gap-5 w-full bg-[#222] text-white rounded-md p-4 shadow-lg">
      <div className="flex items-center gap-4">
      <div className="flex flex-col w-full sm:w-[180px]">
        <label className="text-xs text-gray-300 mb-1 uppercase">City</label>
        <select
          name="city"
          value={filters.city}
          onChange={handleChange}
          className="bg-[#333] border border-[#444] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
        >
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
        </select>
      </div>

      {/* Location */}
      <div className="flex flex-col w-full sm:flex-1 items-start">
        <label className="text-xs text-gray-300 mb-1 uppercase">Location</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Enter location"
          className="bg-[#333] border w-full border-[#444] rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
        />
      </div>

      {/* Find button */}
      <button
        onClick={handleFind}
        className="mt-5 px-5 py-2 w-full sm:w-[120px] bg-[#1ABC9C] font-semibold rounded-md hover:bg-[#17a589] transition-all duration-300"
      >
        FIND
      </button>
      </div>

<div className="flex justify-center gap-4 items-center">
      {/* Property Type */}
      <div className="flex flex-col w-full sm:flex-1 items-start">
        <label className="text-xs text-gray-300 mb-1 uppercase">Property Type</label>
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
          className="bg-[#333] w-full border border-[#444] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
        >
          <option>Homes</option>
          <option>Plots</option>
          <option>Commercial</option>
        </select>
      </div>

      {/* Price */}
      <div className="flex flex-col w-full sm:w-[200px]">
        <label className="text-xs text-gray-300 mb-1 uppercase">Price (PKR)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="priceMin"
            value={filters.priceMin}
            onChange={handleChange}
            className="w-1/2 bg-[#333] border border-[#444] rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          />
          <span className="text-gray-400 text-sm">to</span>
          <input
            type="text"
            name="priceMax"
            value={filters.priceMax}
            onChange={handleChange}
            className="w-1/2 bg-[#333] border border-[#444] rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          />
        </div>
      </div>

      {/* Area */}
      <div className="flex flex-col w-full sm:w-[200px]">
        <label className="text-xs text-gray-300 mb-1 uppercase">Area (Sq. Yd.)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="areaMin"
            value={filters.areaMin}
            onChange={handleChange}
            className="w-1/2 bg-[#333] border border-[#444] rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          />
          <span className="text-gray-400 text-sm">to</span>
          <input
            type="text"
            name="areaMax"
            value={filters.areaMax}
            onChange={handleChange}
            className="w-1/2 bg-[#333] border border-[#444] rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          />
        </div>
      </div>

      {/* Beds */}
      <div className="flex flex-col w-full sm:flex-1 items-start">
        <label className="text-xs text-gray-300 mb-1 uppercase">Beds</label>
        <select
          name="beds"
          value={filters.beds}
          onChange={handleChange}
          className="bg-[#333] w-full border border-[#444] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
        >
          <option>All</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4+</option>
        </select>
      </div>
      </div>

      
     
    </div>
  );
};

export default PropertySearchBar;
