import React, { useState } from "react";
import { FaHome, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const BrowseProperties = () => {
  const propertyTypes = [
    {
      icon: <FaHome className="text-green-500 text-3xl" />,
      title: "Homes",
      data: {
        Popular: [
          { title: "On Instalments", type: "Houses" },
          { title: "1 Bedroom", type: "Flats" },
          { title: "2 Bedroom", type: "Flats" },
          { title: "3 Bedroom", type: "Flats" },
          { title: "Luxury", type: "Flats" },
          { title: "Penthouse", type: "Flats" },
          { title: "Studio", type: "Flats" },
        ],
        Type: [
          { title: "Flats", type: "Residential" },
          { title: "Houses", type: "Residential" },
          { title: "Villas", type: "Luxury" },
          { title: "Townhouses", type: "Modern" },
          { title: "Farmhouses", type: "Luxury" },
        ],
        "Area Size": [
          { title: "120 sq. yd.", type: "Compact" },
          { title: "240 sq. yd.", type: "Mid-size" },
          { title: "500 sq. yd.", type: "Spacious" },
          { title: "1000 sq. yd.", type: "Extra Large" },
        ],
      },
    },
    {
      icon: <FaMapMarkerAlt className="text-green-500 text-3xl" />,
      title: "Plots",
      data: {
        Popular: [
          { title: "Developed", type: "Residential Plots" },
          { title: "Corner", type: "Residential Plots" },
          { title: "Low Price", type: "Residential Plots" },
          { title: "Park Facing", type: "Residential Plots" },
          { title: "Main Road", type: "Residential Plots" },
          { title: "Corner", type: "Residential Plots" },
          { title: "West Open", type: "Residential Plots" },
        ],
        Type: [
          { title: "Residential", type: "Plots" },
          { title: "Commercial", type: "Plots" },
          { title: "Agricultural", type: "Plots" },
          { title: "Industrial", type: "Plots" },
        ],
        "Area Size": [
          { title: "80 sq. yd.", type: "Small" },
          { title: "120 sq. yd.", type: "Medium" },
          { title: "200 sq. yd.", type: "Large" },
        ],
      },
    },
    {
      icon: <FaBuilding className="text-green-500 text-3xl" />,
      title: "Commercial",
      data: {
        Popular: [
          { title: "Small", type: "Offices" },
          { title: "New", type: "Offices" },
          { title: "On Instalments", type: "Shops" },
          { title: "Running", type: "Shops" },
          { title: "Corporate", type: "Offices" },
          { title: "Corner", type: "Shops" },
          { title: "High Floor", type: "Offices" },
        ],
        Type: [
          { title: "Offices", type: "Corporate" },
          { title: "Shops", type: "Retail" },
          { title: "Warehouses", type: "Industrial" },
          { title: "Malls", type: "Commercial" },
          { title: "Offices", type: "Corporate" },
          { title: "Shops", type: "Retail" },
          { title: "Warehouses", type: "Industrial" },
          { title: "Malls", type: "Commercial" },
          { title: "Offices", type: "Corporate" },
          { title: "Shops", type: "Retail" },
          { title: "Warehouses", type: "Industrial" },
          { title: "Malls", type: "Commercial" },
        ],
        "Area Size": [
          { title: "300 sq. ft.", type: "Small" },
          { title: "600 sq. ft.", type: "Medium" },
          { title: "1000 sq. ft.", type: "Large" },
        ],
      },
    },
  ];

  const [activeTabs, setActiveTabs] = useState(propertyTypes.map(() => "Popular"));
  const [currentIndex, setCurrentIndex] = useState(propertyTypes.map(() => 0));

  const handleTabChange = (index, tab) => {
    const updatedTabs = [...activeTabs];
    updatedTabs[index] = tab;
    setActiveTabs(updatedTabs);
    const resetSlider = [...currentIndex];
    resetSlider[index] = 0;
    setCurrentIndex(resetSlider);
  };

  const handleNext = (index, totalItems) => {
    const updatedIndex = [...currentIndex];
    const maxIndex = Math.ceil(totalItems / 6) - 1;
    if (updatedIndex[index] < maxIndex) updatedIndex[index] += 1;
    setCurrentIndex(updatedIndex);
  };

  const handlePrev = (index) => {
    const updatedIndex = [...currentIndex];
    if (updatedIndex[index] > 0) updatedIndex[index] -= 1;
    setCurrentIndex(updatedIndex);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <h2 className="text-3xl font-bold text-[#0b2239] mb-8">Browse Properties</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {propertyTypes.map((category, index) => {
          const tabData = category.data[activeTabs[index]];
          const start = currentIndex[index] * 6;
          const visibleItems = tabData.slice(start, start + 6);

          return (
            <div
              key={index}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 relative flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-[#0b2239]">{category.title}</h3>
              </div>

              {/* Tabs */}
              <div className="flex gap-5 border-b pb-2 mb-4">
                {["Popular", "Type", "Area Size"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(index, tab)}
                    className={`text-sm font-semibold transition-all ${
                      activeTabs[index] === tab
                        ? "text-green-600 border-b-2 border-green-500"
                        : "text-gray-400 hover:text-green-600"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Fixed Centered Arrows */}
              <div className="relative flex-1">
                {/* Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {visibleItems.map((item, i) => (
                    <div
                      key={i}
                      className="border rounded-lg p-3 text-center hover:shadow-md transition cursor-pointer"
                    >
                      <h4 className="font-semibold text-[#0b2239] text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.type}</p>
                    </div>
                  ))}
                </div>

                {/* Slider Arrows */}
                {tabData.length > 6 && (
                  <>
                    <button
                      onClick={() => handlePrev(index)}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-2 hover:bg-green-500 hover:text-white transition ${
                        currentIndex[index] === 0 ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      <HiChevronLeft />
                    </button>

                    <button
                      onClick={() => handleNext(index, tabData.length)}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-2 hover:bg-green-500 hover:text-white transition ${
                        (currentIndex[index] + 1) * 6 >= tabData.length
                          ? "opacity-30 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <HiChevronRight />
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowseProperties;
