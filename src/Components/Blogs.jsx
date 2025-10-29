import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import BlogFirstImg from "../SiteImages/blog-5.jpg"
import BlogSecondImg from "../SiteImages/blog-7.jpg"
import BlogThirdImg from "../SiteImages/blog-8.jpg"
import BlogFourthImg from "../SiteImages/home4.webp"
import BlogFifthImg from "../SiteImages/home5.jpeg"
import BlogSixthImg from "../SiteImages/home2.webp"


const Blogs = () => {
  const blogs = [
    {
      title: "Investment Hotspots in Karachi",
      desc: "Top areas offering high ROI opportunities for 2025.",
      img: BlogThirdImg,
    },
    {
      title: "Smart Homes & IoT Integration",
      desc: "How technology is redefining modern living spaces.",
      img: BlogFirstImg,
    },
    {
      title: "Understanding Property Taxes",
      desc: "Quick guide to help you manage real estate tax compliance.",
      img: BlogSecondImg,
    },
    {
      title: "Architecture That Inspires",
      desc: "Minimalist and Islamic influences shaping new designs.",
      img: BlogFourthImg,
    },
    {
      title: "Guide to Buying on Installments",
      desc: "Smart ways to plan and finance your next property purchase.",
      img: BlogFifthImg,
    },
    {
      title: "Commercial Spaces in Demand",
      desc: "Explore where businesses are expanding this year.",
      img: BlogSixthImg,
    },
    {
      title: "Why Location Still Matters",
      desc: "How access and environment affect long-term value.",
      img: BlogThirdImg,
    },
    {
      title: "Real Estate Trends 2025",
      desc: "Discover how AI and sustainability are reshaping property markets.",
      img: BlogFourthImg,
    },
    {
      title: "Investment Hotspots in Karachi",
      desc: "Top areas offering high ROI opportunities for 2025.",
      img: BlogThirdImg,
    },
    {
      title: "Smart Homes & IoT Integration",
      desc: "How technology is redefining modern living spaces.",
      img: BlogFirstImg,
    },
    {
      title: "Understanding Property Taxes",
      desc: "Quick guide to help you manage real estate tax compliance.",
      img: BlogSecondImg,
    },
    {
      title: "Architecture That Inspires",
      desc: "Minimalist and Islamic influences shaping new designs.",
      img: BlogFourthImg,
    },
    {
      title: "Guide to Buying on Installments",
      desc: "Smart ways to plan and finance your next property purchase.",
      img: BlogFifthImg,
    },
    {
      title: "Commercial Spaces in Demand",
      desc: "Explore where businesses are expanding this year.",
      img: BlogSixthImg,
    },
    {
      title: "Why Location Still Matters",
      desc: "How access and environment affect long-term value.",
      img: BlogThirdImg,
    },
  ];

  const slidesToShow = 4; // ✅ fixed at 4
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < blogs.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-10 relative overflow-hidden">
      <h2 className="text-3xl font-bold text-[#0b2239] mb-8">Latest Blogs</h2>

      <div className="relative">
        <div className="overflow-hidden">
          <div
  className="flex transition-transform duration-500 ease-in-out"
  style={{
    transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
  }}
>

            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0b2239] text-lg mb-2 line-clamp-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {blog.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <>
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-3 hover:bg-green-500 hover:text-white transition ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            <HiChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-3 hover:bg-green-500 hover:text-white transition ${
              currentIndex >= blogs.length - slidesToShow
                ? "opacity-30 cursor-not-allowed"
                : ""
            }`}
          >
            <HiChevronRight />
          </button>
        </>
      </div>
    </section>
  );
};

export default Blogs;
