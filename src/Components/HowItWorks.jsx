import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen bg-gray-50 py-20 px-6 text-center flex flex-col items-center"
    >
      {/* Title + Intro */}
      <h2 className="text-4xl font-bold text-[#1a2a33] mb-4">
        How It Works
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Buying a home has never been this easy. Our guided process ensures you
        get matched with the right property in minutes — from registration to
        signing your contract.
      </p>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition">
          <div className="text-5xl text-teal-600 mb-4">1️⃣</div>
          <h3 className="font-semibold text-lg mb-3 text-teal-700">
            Register Your Account
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Create your free account and tell us a little about your goals,
            whether you’re buying a new construction or a pre-owned property.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition">
          <div className="text-5xl text-teal-600 mb-4">2️⃣</div>
          <h3 className="font-semibold text-lg mb-3 text-teal-700">
            Set Your Requirements
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Choose your budget range, location preferences, and home type. Our
            system instantly filters the best listings from builders or HAR.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl shadow p-8 hover:shadow-lg transition">
          <div className="text-5xl text-teal-600 mb-4">3️⃣</div>
          <h3 className="font-semibold text-lg mb-3 text-teal-700">
            Get Matched Instantly
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Explore curated properties, schedule visits, make offers, and sign
            contracts — all from one seamless portal experience.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-24 h-1 bg-teal-500 mt-20 mb-12 rounded-full"></div>

      {/* Add-on Section: Why Choose DreamPath */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-[#1a2a33] mb-4">
          Why Choose DreamPath?
        </h3>
        <p className="text-gray-600 mb-10">
          Because buying a home should feel inspiring, not intimidating. With
          verified listings, transparent contracts, and one-click offers, you
          stay in control at every step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold text-teal-600 mb-2">
              🔍 Verified Builders
            </h4>
            <p className="text-gray-500">
              Partnered only with top-rated builders and trusted HAR sources.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold text-teal-600 mb-2">
              💬 Guided Support
            </h4>
            <p className="text-gray-500">
              Our experts assist you with offers, documentation, and financing.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-semibold text-teal-600 mb-2">
              ⚡ Fast & Transparent
            </h4>
            <p className="text-gray-500">
              From first click to final signature — everything happens
              digitally and securely.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <button className="bg-[#1ABC9C] text-white px-8 py-4 rounded-lg font-medium text-lg shadow hover:bg-[#16a085] transition">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
