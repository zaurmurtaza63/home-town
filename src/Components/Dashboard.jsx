import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RegisterForm from "./Forms/RegisterForm";
import RequirementsForm from "./Forms/RequirementsForm";
import PreQualifyForm from "./Forms/PreQualifyForm";
import ContractImg from '../SiteImages/Contract-img.webp'
const Dashboard = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState(null);

  const steps = [
    { step: "1️⃣", title: "Register", desc: "Create your account in seconds.", form: "register" },
    { step: "2️⃣", title: "Requirements", desc: "Set your preferences and budget.", form: "requirements" },
    { step: "3️⃣", title: "Pre-Qualify", desc: "Verify eligibility for offers.", form: "prequalify" },
  ];

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* HERO / MAIN SECTION */}
      <motion.div
        className="flex flex-col items-center justify-center flex-grow py-20 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2a33] mb-2">
          Welcome to HomeTown Portal
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Choose your path to find a new or pre-owned home.
        </p>

        {/* CHOICE CARDS */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* NEW CONSTRUCTION */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden w-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="New Construction"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#1a2a33] mb-2">
                New Construction
              </h3>
              <button
                onClick={() => navigate("/builders")}
                className="bg-[#1ABC9C] text-white px-5 py-2 rounded-md font-medium hover:bg-[#16a085] transition"
              >
                View Builders
              </button>
            </div>
          </motion.div>

          {/* PRE-OWNED */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden w-[300px]"
          >
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="Pre-Owned Home"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-[#1a2a33] mb-2">
                Pre-Owned
              </h3>
              <button className="border border-gray-400 text-gray-800 px-5 py-2 rounded-md font-medium hover:border-[#1ABC9C] hover:text-[#1ABC9C] transition">
                View Listings
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* SECTION 1 — HOW IT WORKS */}
      <motion.section
        className="bg-[#1a2a33] text-white py-16 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">How the Portal Works</h2>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10">
          Register your account, set your home requirements, and pre-qualify to connect with top builders or real estate partners instantly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveForm(item.form)}
              className="cursor-pointer bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              <div className="text-4xl mb-3">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ FORM MODALS */}
      {activeForm === "register" && <RegisterForm onClose={() => setActiveForm(null)} />}
      {activeForm === "requirements" && <RequirementsForm onClose={() => setActiveForm(null)} />}
      {activeForm === "prequalify" && <PreQualifyForm onClose={() => setActiveForm(null)} />}

      {/* SECTION 2 — EXPLORE COMMUNITIES */}
      <motion.section
        className="bg-white py-20 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#1a2a33] mb-6">
          Explore Our Trusted Communities
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          HomeTown works with premium construction partners and developers to bring your dream home closer than ever.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🏡 Replace these placeholders with real community images later */}
          <div className="firstCommunityImg rounded-xl h-64 flex items-center justify-center text-gray-500">
          </div>
          <div className="secondCommunityImg rounded-xl h-64 flex items-center justify-center text-gray-500">
          </div>
          <div className="thirdCommunityImg rounded-xl h-64 flex items-center justify-center text-gray-500">
          </div>
        </div>
      </motion.section>

      {/* SECTION 3 — VISIT & CONTRACT */}
      <motion.section
        className="bg-[#f4f7f8] py-20 px-6 md:px-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#1a2a33] mb-6">
          From Visit to Contract — Simplified
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Schedule a property visit, make an offer, and finalize your contract — all through a single seamless dashboard.
        </p>

        <div className="contractImg rounded-xl flex items-center justify-center">
            <img className="h-96 rounded-lg" src={ContractImg} alt="ContractImg" />
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between px-10">
        <p>© 2025 HomeTown Portal. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#1ABC9C] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#1ABC9C] transition">
            Terms
          </a>
          <a href="#" className="hover:text-[#1ABC9C] transition">
            Support
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Dashboard;
