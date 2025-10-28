import React, { useState, useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa6";

const NewProjects = () => {
  const [city, setCity] = useState("Karachi");
  const [activeSlide, setActiveSlide] = useState(0);

  // 🔹 Hero slider images
  const slides = [
    "https://source.unsplash.com/1600x600/?luxury,apartments",
    "https://source.unsplash.com/1600x600/?real-estate,architecture",
    "https://source.unsplash.com/1600x600/?modern,building",
  ];

  // 🔹 Project cards
  const projects = [
    {
      name: "Downtown Heights",
      location: "Gulshan-e-Iqbal, Karachi",
      image: "https://source.unsplash.com/800x500/?luxury,apartment",
      price: "Starting from PKR 85 Lakh",
      developer: "Skyline Builders",
    },
    {
      name: "Palm Residency",
      location: "Bahria Town, Karachi",
      image: "https://source.unsplash.com/800x500/?residential,building",
      price: "Starting from PKR 1.2 Crore",
      developer: "Al-Habib Developers",
    },
    {
      name: "Ocean Tower",
      location: "Clifton, Karachi",
      image: "https://source.unsplash.com/800x500/?architecture,skyscraper",
      price: "Starting from PKR 2.5 Crore",
      developer: "Urban Vision Pvt. Ltd.",
    },
  ];

  // 🔹 City slider cards
  const cityProjects = [
    { city: "Islamabad", projects: 289 },
    { city: "Lahore", projects: 208 },
    { city: "Karachi", projects: 182 },
    { city: "Rawalpindi", projects: 75 },
    { city: "Peshawar", projects: 54 },
    { city: "Faisalabad", projects: 40 },
  ];

  // 🔹 Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#f5f7f8]">
      {/* Hero Slider */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Discover New Real Estate Projects
          </h1>
          <p className="text-gray-200 max-w-2xl text-sm sm:text-base">
            Explore premium developments from Pakistan’s top builders and find your next investment.
          </p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center items-center gap-4 bg-white py-6 px-4 shadow-md mt-[-40px] mx-auto max-w-5xl rounded-lg relative z-10">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-[#f0f0f0] text-[#0b2239] px-4 py-2 rounded-md focus:outline-none border border-gray-300"
        >
          <option>Karachi</option>
          <option>Lahore</option>
          <option>Islamabad</option>
        </select>

        <input
          type="text"
          placeholder="Search by project name"
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C] w-64"
        />

        <button className="px-6 py-2 bg-[#1ABC9C] text-white rounded-md font-semibold hover:bg-[#17a589] transition-all">
          Search
        </button>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img src={proj.image} alt={proj.name} className="w-full h-56 object-cover" />
              <div className="absolute top-3 left-3 bg-[#1ABC9C] text-xs text-white px-3 py-1 rounded">
                New Project
              </div>
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-[#0b2239]">{proj.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{proj.location}</p>
              <p className="text-[#1ABC9C] font-semibold">{proj.price}</p>
              <p className="text-gray-400 text-xs mt-1">
                by <span className="font-semibold text-gray-600">{proj.developer}</span>
              </p>
              <button className="mt-4 w-full bg-[#1ABC9C] text-white font-semibold py-2 rounded-md hover:bg-[#17a589] transition-all">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* CTA Section */}
      <div className="bg-[#0b2239] py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-3">Launch Your Own Project with Us</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Partner with Split Creatives to showcase and sell your real estate projects
          across Pakistan’s top property platform.
        </p>
        <button className="bg-[#1ABC9C] px-8 py-3 rounded-md font-semibold hover:bg-[#17a589] transition-all">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NewProjects;
