import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { blogs } from "../data/BlogsData";


const Blogs = () => {
   

    const slidesToShow = 4; 
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
                        className="flex transition-transform duration-500 ease-in-out pb-5"
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

                                        <Link
                                            to="/single-blog"
                                            state={{ blog }}
                                            className="mt-4 inline-block text-[#1ABC9C] font-medium hover:text-green-800 transition"
                                        >
                                            Learn More →
                                        </Link>
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
                        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-3 hover:bg-green-500 hover:text-white transition ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
                            }`}
                    >
                        <HiChevronLeft />
                    </button>

                    <button
                        onClick={handleNext}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow-md p-3 hover:bg-green-500 hover:text-white transition ${currentIndex >= blogs.length - slidesToShow
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
