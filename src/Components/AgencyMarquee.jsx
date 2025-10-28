import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Builder1 from "../SiteImages/home1.jpeg";
import Builder2 from "../SiteImages/home2.webp";
import Builder3 from "../SiteImages/home3.bmp";
import Builder4 from "../SiteImages/home4.webp";
import Builder5 from "../SiteImages/home5.jpeg";
import Builder6 from "../SiteImages/home6.jpeg";
import Builder7 from "../SiteImages/home7.jfif";
import Builder8 from "../SiteImages/home8.webp";
import Builder9 from "../SiteImages/home9.webp";

// Dummy Data (replace with your real logos)
const agencies = [
  { name: "Universal Enterprises", location: "Islamabad", img: Builder1 },
  { name: "Zaman Associates & Builders", location: "Islamabad", img: Builder2 },
  { name: "Al Ahmer Real Estate", location: "Islamabad", img: Builder3 },
  { name: "Ghandhara International", location: "Islamabad", img: Builder4 },
  { name: "Zulfiqar Enterprises", location: "Islamabad", img: Builder5 },
  { name: "Khalid Real Estate & Developers", location: "Islamabad", img: Builder6 },
  { name: "Royal Paras", location: "Islamabad", img: Builder7 },
  { name: "Capital Land Real Estate", location: "Islamabad", img: Builder8 },
  { name: "Khalid Real Estate & Developers", location: "Islamabad", img: Builder9 },
  { name: "Universal Enterprises", location: "Islamabad", img: Builder1 },
  { name: "Zaman Associates & Builders", location: "Islamabad", img: Builder2 },
  { name: "Al Ahmer Real Estate", location: "Islamabad", img: Builder3 },
  { name: "Ghandhara International", location: "Islamabad", img: Builder4 },
  { name: "Zulfiqar Enterprises", location: "Islamabad", img: Builder5 },
  { name: "Khalid Real Estate & Developers", location: "Islamabad", img: Builder6 },
  { name: "Royal Paras", location: "Islamabad", img: Builder7 },
  { name: "Capital Land Real Estate", location: "Islamabad", img: Builder8 },
  { name: "Khalid Real Estate & Developers", location: "Islamabad", img: Builder9 },
];

const MarqueeRow = ({ reverse = false }) => {
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {agencies.concat(agencies).map((agency, i) => (
          <div
            key={i}
            className="flex items-center gap-3 min-w-[250px] bg-white p-3 rounded-xl shadow-sm transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
            style={{ willChange: "transform" }}
          >
            <img
              src={agency.img}
              alt={agency.name}
              className="w-14 h-14 rounded-md object-cover border"
            />
            <div>
              <h4 className="font-semibold text-[#0b2239] text-sm whitespace-nowrap">
                {agency.name}
              </h4>
              <p className="text-gray-500 text-xs flex items-center gap-1">
                <FaMapMarkerAlt className="text-green-500" /> {agency.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AgencyMarquee = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 overflow-hidden">
      <h2 className="text-3xl font-bold text-[#0b2239] mb-8">Titanium Agencies</h2>
      <MarqueeRow />
      <div className="mt-8">
        <MarqueeRow reverse />
      </div>
    </section>
  );
};

export default AgencyMarquee;
