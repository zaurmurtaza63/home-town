import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/BlogsData";

const AllBlogs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 min-h-screen pt-[130px]">
      <h1 className="text-4xl font-bold text-[#0b2239] mb-10">All Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="font-semibold text-[#0b2239] text-lg mb-2 line-clamp-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {blog.desc}
                </p>
              </div>

              {/* Learn More Button */}
              <Link
                to="/single-blog"
                state={{ blog }}
                className="mt-4 inline-block text-[#1ABC9C] font-semibold hover:text-[#0b2239] transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
