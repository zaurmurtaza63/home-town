import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleBlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-4">
        <p className="text-gray-500 text-lg">No blog selected.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-[#1ABC9C] font-medium hover:text-green-800 transition"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-10 bg-white min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-[#1ABC9C] font-medium hover:text-green-800 mb-6 transition"
      >
        ← Back to Blogs
      </button>

      <div className="max-w-4xl mx-auto">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-2xl shadow-md mb-8"
        />
        <h1 className="text-3xl font-bold text-[#0b2239] mb-4">{blog.title}</h1>
        <p className="text-gray-600 text-lg leading-relaxed">{blog.desc}</p>
      </div>
    </section>
  );
};

export default SingleBlogPost;
