import React, { useState, useEffect, useRef } from "react";

const PropertySearchBar = () => {
  const defaultFilters = {
    city: "Karachi",
    location: "",
    propertyType: "Homes",
    priceMin: "0",
    priceMax: "Any",
    areaMin: "0",
    areaMax: "Any",
    beds: "All",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [showMore, setShowMore] = useState(false);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [showBedsDropdown, setShowBedsDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const areaDropdownRef = useRef(null);
  const bedsDropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFind = () => {
    console.log("Searching with filters:", filters);
    alert(`Searching properties in ${filters.city}`);
  };

  const handleReset = () => {
    setFilters(defaultFilters);
    setShowPriceDropdown(false);
    setShowAreaDropdown(false);
    setShowBedsDropdown(false);
  };

  const MaxpriceOptions = [
    "Any",
    "500,000",
    "1,000,000",
    "2,000,000",
    "3,500,000",
    "5,000,000",
    "10,000,000",
    "20,000,000",
  ];
  const MinpriceOptions = [
    "0",
    "500,000",
    "1,000,000",
    "2,000,000",
    "3,500,000",
    "5,000,000",
    "10,000,000",
    "20,000,000",
  ];
  const minAreaOptions = ["0", "2", "3", "5", "8", "10", "15", "20", "30", "40"];
  const maxAreaOptions = ["Any", "2", "3", "5", "8", "10", "15", "20", "30", "40", "50"];
  const bedOptions = ["All", "Studio", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  // ✅ Single outside click listener for all dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setShowPriceDropdown(false);
      if (areaDropdownRef.current && !areaDropdownRef.current.contains(event.target))
        setShowAreaDropdown(false);
      if (bedsDropdownRef.current && !bedsDropdownRef.current.contains(event.target))
        setShowBedsDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mt-5 flex flex-col gap-2 w-full bg-black/10 backdrop-blur-[25px] text-white rounded-md p-3 shadow-lg md:max-w-[80%] max-w-full lg:max-w-[60%]">
      {/* Top Row */}
      <div className="flex items-center gap-4 flex-wrap">
        {/* City */}
        <div className="flex flex-col items-start">
          <label className="text-xs text-white mb-1 uppercase">City</label>
          <select
            name="city"
            value={filters.city}
            onChange={handleChange}
            className="bg-white text-black border border-[#444] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          >
            <option>Karachi</option>
            <option>Lahore</option>
            <option>Islamabad</option>
          </select>
        </div>

        {/* Location */}
        <div className="flex flex-col w-full sm:flex-1 items-start">
          <label className="text-xs text-white mb-1 uppercase">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="bg-white text-black opacity-65 border w-full border-[#2d2a2a] rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          />
        </div>

        {/* Find Button */}
        <button
          onClick={handleFind}
          className="mt-5 px-5 py-2 w-full sm:w-[120px] bg-[#1ABC9C] font-semibold rounded-md hover:bg-[#17a589] transition-all duration-300"
        >
          FIND
        </button>
      </div>

      {/* Bottom Filters */}
      <div
        className={`grid sm:grid-cols-4 gap-4 transition-all duration-500 ease-in-out ${
          showMore ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          overflow:
            showPriceDropdown || showAreaDropdown || showBedsDropdown
              ? "visible"
              : "hidden",
        }}
      >
        {/* Property Type */}
        <div className="flex flex-col items-start">
          <label className="text-xs text-gray-300 mb-1 uppercase">Property Type</label>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            className="bg-white text-black w-full border border-[#444] rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#1ABC9C]"
          >
            <option>Homes</option>
            <option>Plots</option>
            <option>Commercial</option>
          </select>
        </div>

        {/* PRICE FIELD */}
        <div className="flex flex-col items-start relative">
          <label className="text-xs text-gray-300 mb-1 uppercase">Price (PKR)</label>
          <div
            onClick={() => setShowPriceDropdown(true)}
            className="flex items-center gap-2 w-full cursor-pointer select-none relative"
            style={{ zIndex: 2 }}
          >
            <input
              readOnly
              value={filters.priceMin}
              className="w-1/2 bg-white text-black border border-[#444] rounded px-2 py-2 text-sm cursor-pointer"
            />
            <span className="text-gray-400 text-sm">to</span>
            <input
              readOnly
              value={filters.priceMax}
              className="w-1/2 bg-white text-black border border-[#444] rounded px-2 py-2 text-sm cursor-pointer"
            />
            <span className="absolute right-2 text-gray-400">▼</span>
          </div>

          {showPriceDropdown && (
            <div
              ref={dropdownRef}
              className="absolute top-full left-0 mt-2 bg-white text-black text-black rounded-md shadow-xl z-50 w-[240px] p-3"
            >
              <div className="flex justify-between items-center border-b pb-1 mb-2">
                <span className="font-semibold text-sm text-[#1ABC9C]">
                  Change currency (PKR)
                </span>
                <button
                  onClick={() => setShowPriceDropdown(false)}
                  className="text-xs text-gray-600 border border-gray-300 px-2 rounded hover:bg-gray-100"
                >
                  Close
                </button>
              </div>

              <div className="flex justify-between gap-3">
                {/* MIN */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-gray-700 mb-1 text-center">MIN</p>
                  <div className="max-h-[260px] overflow-y-auto border rounded">
                    {MinpriceOptions.map((price) => (
                      <div
                        key={price}
                        onClick={() => setFilters({ ...filters, priceMin: price })}
                        className={`p-2 text-center cursor-pointer hover:bg-[#1ABC9C] hover:text-white ${
                          filters.priceMin === price ? "bg-[#1ABC9C] text-white" : ""
                        }`}
                      >
                        {price}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MAX */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-gray-700 mb-1 text-center">MAX</p>
                  <div className="max-h-[260px] overflow-y-auto border rounded">
                    {MaxpriceOptions.map((price) => (
                      <div
                        key={price}
                        onClick={() => setFilters({ ...filters, priceMax: price })}
                        className={`p-2 text-center cursor-pointer hover:bg-[#1ABC9C] hover:text-white ${
                          filters.priceMax === price ? "bg-[#1ABC9C] text-white" : ""
                        }`}
                      >
                        {price}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* AREA FIELD */}
        <div className="flex flex-col items-start relative">
          <label className="text-xs text-gray-300 mb-1 uppercase">Area (Sq. Yd.)</label>
          <div
            onClick={() => setShowAreaDropdown(true)}
            className="flex items-center gap-2 w-full cursor-pointer select-none relative"
            style={{ zIndex: 2 }}
          >
            <input
              readOnly
              value={filters.areaMin}
              className="w-1/2 bg-white text-black border border-[#444] rounded px-2 py-2 text-sm cursor-pointer"
            />
            <span className="text-gray-400 text-sm">to</span>
            <input
              readOnly
              value={filters.areaMax}
              className="w-1/2 bg-white text-black border border-[#444] rounded px-2 py-2 text-sm cursor-pointer"
            />
            <span className="absolute right-2 text-gray-400">▼</span>
          </div>

          {showAreaDropdown && (
            <div
              ref={areaDropdownRef}
              className="absolute top-full left-0 mt-2 bg-white text-black text-black rounded-md shadow-xl z-50 w-[240px] p-3"
            >
              <div className="flex justify-between items-center border-b pb-1 mb-2">
                <span className="font-semibold text-sm text-[#1ABC9C]">Select Area (Sq. Yd.)</span>
                <button
                  onClick={() => setShowAreaDropdown(false)}
                  className="text-xs text-gray-600 border border-gray-300 px-2 rounded hover:bg-gray-100"
                >
                  Close
                </button>
              </div>

              <div className="flex justify-between gap-3">
                {/* MIN */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-gray-700 mb-1 text-center">MIN</p>
                  <div className="max-h-[260px] overflow-y-auto border rounded">
                    {minAreaOptions.map((area) => (
                      <div
                        key={area}
                        onClick={() => setFilters({ ...filters, areaMin: area })}
                        className={`p-2 text-center cursor-pointer hover:bg-[#1ABC9C] hover:text-white ${
                          filters.areaMin === area ? "bg-[#1ABC9C] text-white" : ""
                        }`}
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MAX */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-gray-700 mb-1 text-center">MAX</p>
                  <div className="max-h-[260px] overflow-y-auto border rounded">
                    {maxAreaOptions.map((area) => (
                      <div
                        key={area}
                        onClick={() => setFilters({ ...filters, areaMax: area })}
                        className={`p-2 text-center cursor-pointer hover:bg-[#1ABC9C] hover:text-white ${
                          filters.areaMax === area ? "bg-[#1ABC9C] text-white" : ""
                        }`}
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BEDS DROPDOWN */}
        <div className="flex flex-col items-start relative">
          <label className="text-xs text-gray-300 mb-1 uppercase">Beds</label>
          <div
            onClick={() => setShowBedsDropdown(true)}
            className="w-full bg-white text-black border border-[#444] rounded px-3 py-2 text-sm flex justify-between items-center cursor-pointer select-none relative"
            style={{ zIndex: 2 }}
          >
            <span>{filters.beds}</span>
            <span className="text-gray-400 text-sm">▼</span>
          </div>

          {showBedsDropdown && (
            <div
              ref={bedsDropdownRef}
              className="absolute top-full left-0 mt-2 bg-white text-black text-black rounded-md shadow-xl z-50 w-[200px] p-2"
            >
              <div className="flex justify-between items-center border-b pb-1 mb-2">
                <span className="font-semibold text-sm text-[#1ABC9C]">Select Beds</span>
                <button
                  onClick={() => setShowBedsDropdown(false)}
                  className="text-xs text-gray-600 border border-gray-300 px-2 rounded hover:bg-gray-100"
                >
                  Close
                </button>
              </div>

              <div className="max-h-[260px] overflow-y-auto border rounded">
                {bedOptions.map((bed) => (
                  <div
                    key={bed}
                    onClick={() => setFilters({ ...filters, beds: bed })}
                    className={`p-2 text-center cursor-pointer hover:bg-[#1ABC9C] hover:text-white ${
                      filters.beds === bed ? "bg-[#1ABC9C] text-white" : ""
                    }`}
                  >
                    {bed}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toggle + Reset */}
      <div className="text-start cursor-pointer select-none flex items-center gap-5 text-[#1ABC9C]">
        <span
          onClick={() => setShowMore(!showMore)}
          className="text-sm text-[#1ABC9C] hover:underline"
        >
          {showMore ? "Less Options ▲" : "More Options ▼"}
        </span>
        <button
          onClick={handleReset}
          className="text-sm text-[#1ABC9C] hover:underline transition-all duration-200"
        >
          Reset Search ↺
        </button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
