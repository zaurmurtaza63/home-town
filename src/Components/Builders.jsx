import React from "react";
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

const Builders = () => {
  const navigate = useNavigate();

  const builders = [
    {
      name: "Paragon Constructors",
      tagline: "Luxury Modern Homes",
      image: Builder1,
      userLink: "https://www.paragon.com.pk/",
    },
    {
      name: "RBS Real Estate & Builders",
      tagline: "Urban & Smart Living",
      image: Builder2,
      userLink: "https://rbsland.com/",
    },
    {
      name: "Fazaia Housing",
      tagline: "Elegant Family Residences",
      image: Builder3,
      userLink: "https://zameen.com/",
    },
    {
      name: "DHA Builders",
      tagline: "Eco-Friendly Smart Homes",
      image: Builder4,
      userLink: "https://dhabuilders.com/",
    },
    {
      name: "Gold Crest Builders",
      tagline: "Contemporary Designs, Timeless Quality",
      image: Builder5,
      userLink: "https://alghurairgiga.com/",
    },
    {
      name: "Emar Pakistan",
      tagline: "Where Comfort Meets Style",
      image: Builder6,
      userLink: "https://pk.emaar.com/en/",
    },
    {
      name: "Bahria Town",
      tagline: "Crafting Landmarks of Tomorrow",
      image: Builder7,
      userLink: "https://bahriatown.com/",
    },
    {
      name: "GFS Builders & Developers",
      tagline: "Luxury & Sustainability Combined",
      image: Builder8,
      userLink: "https://gfsbuilders.com.pk/",
    },
    {
      name: "Habib Construction",
      tagline: "Smart, Secure, and Sustainable",
      image: Builder9,
      userLink: "https://www.hcs.com.pk/",
    },
    {
      name: "Paragon Constructors",
      tagline: "Luxury Modern Homes",
      image: Builder1,
      userLink: "https://www.paragon.com.pk/",
    },
  ];

  return (
   <>
   {/* Fullscreen Background Video Section */}
<div className="relative w-full h-screen overflow-hidden">
    
  {/* Background Video */}
  <iframe
    src="https://www.youtube.com/embed/xlCdna6PfAE?autoplay=1&mute=1&controls=0&loop=1&playlist=xlCdna6PfAE&modestbranding=1&rel=0"
    title="GFS Builders - Our Passion"
    className="absolute top-0 left-0 w-full h-full object-cover"
    allow="autoplay; fullscreen"
  ></iframe>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
    <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">Our Passion</h2>
    <p className="max-w-3xl text-lg leading-relaxed text-gray-200">
      Home Town Builders and Developers are serving low-cost housing by providing
      comfort and high-standard utilities to every customer. We turn visions
      into reality — offering affordable, luxurious living across Pakistan.
    </p>
  </div>
</div>

    <section className="min-h-screen bg-gray-50 py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1a2a33] mb-4">Top Builders</h1>
        <p className="text-gray-600 mb-10 md:w-1/2 w-full leading-relaxed">
          Explore trusted builders delivering premium craftsmanship.
          <br />
          Discover new construction projects designed for modern living.
          <br />
          Find the home that fits your lifestyle and future.
        </p>

        {/* Builder Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {builders.map((builder, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              <img
                src={builder.image}
                alt={builder.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-[#1a2a33] mb-1">
                    {builder.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{builder.tagline}</p>
                </div>
                <a
                  href={builder.userLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-auto bg-[#1ABC9C] text-white text-sm px-4 py-2 rounded-md hover:bg-[#169c82] transition w-full">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-[#1ABC9C] font-medium hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default Builders;
