import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signup, login, forgotPassword } from "../api/auth";
import { useAuthModal } from "../context/AuthModalContext";
import PropertySearchBar from "../Components/PropertySearchBar"

const HeroSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isBuilder, setIsBuilder] = useState(false);
  const [builderStep, setBuilderStep] = useState(0);
  const [mode, setMode] = useState("buy");

  const {
    isOpen: showForm,
    openAuth,
    closeAuth,
    formType,
    setFormType,
    showForgot,
    setShowForgot,
  } = useAuthModal();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
    company_name: "",
    registration_number: "",
    ntn_number: "",
    license_id: "",
    license_picture: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, license_picture: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- LOGIN FLOW ---
    if (formType === "login") {
      try {
        const { data } = await login({
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
        closeAuth();
      } catch (err) {
        alert(err?.response?.data?.message || "Login failed!");
      }
      return;
    }

    // --- SIGNUP FLOW ---
    if (!isBuilder) {
      if (formData.password !== formData.confirm) {
        alert("Passwords do not match!");
        return;
      }

      try {
        await signup(formData);
        alert("Signup successful! Please log in now.");
        setFormType("login");
      } catch (err) {
        alert(err?.response?.data?.message || "Signup failed!");
      }
      return;
    }

    // --- BUILDER MULTI-STEP FLOW ---
    if (isBuilder && builderStep === 0) {
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.phone ||
        !formData.email ||
        !formData.password ||
        !formData.confirm
      ) {
        alert("Please fill all personal fields.");
        return;
      }
      if (formData.password !== formData.confirm) {
        alert("Passwords do not match!");
        return;
      }
      setBuilderStep(1);
      return;
    }

    if (isBuilder && builderStep === 1) {
      if (
        !formData.company_name ||
        !formData.registration_number ||
        !formData.ntn_number ||
        !formData.license_id ||
        !formData.license_picture
      ) {
        alert("Please fill all company details.");
        return;
      }

      try {
        await signup({ ...formData, is_builder: true });
        alert(
          "your details are sumbitted successfully! wait for admin approval . You will be notified when you get approved"
        );
        setBuilderStep(0);
        setIsBuilder(false);
        closeAuth();
      } catch (err) {
        alert(err?.response?.data?.message || "Signup failed!");
      }
    }
  };

  return (
   <section className="hero-section relative h-screen flex items-center justify-center bg-gradient-to-b from-[#0b2239] to-[#1a365d] text-white">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 w-full md:w-2/3 pt-12">
      Your Dream Property is Just a Click Away
    </h1>

<div>
  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
        {mode === "buy"
          ? "Search properties for buy in Pakistan"
          : "Search properties to sale in Pakistan"}
      </h3>
</div>
    <div className="flex flex-col sm:flex-row gap-4">
      <button
          onClick={() => setMode("buy")}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg ${
            mode === "buy"
              ? "bg-[#1ABC9C] text-white shadow-[#1ABC9C]/30"
              : "bg-transparent border border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C] hover:text-white"
          }`}
        >
          Buy
        </button>
      <button
          onClick={() => setMode("rent")}
          className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
            mode === "rent"
              ? "bg-[#1ABC9C] text-white shadow-[#1ABC9C]/30"
              : "bg-transparent border border-[#1ABC9C] text-[#1ABC9C] hover:bg-[#1ABC9C] hover:text-white"
          }`}
        >
          Rent
        </button>
      <button className="px-8 py-3 bg-white text-[#0b2239] font-semibold rounded-md hover:bg-[#1ABC9C] hover:text-white transition-all duration-300">
        <a href="#">New Projects</a>
      </button>
    </div>
    <PropertySearchBar/>
  </div>

  {/* Optional subtle overlay pattern or gradient shine */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>


      {/* 🔹 AUTH MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={closeAuth} />
          <div className="w-full max-w-md bg-white p-6 shadow-xl overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                {formType === "login" ? "Login" : "Sign Up"}
              </h3>
              <button onClick={closeAuth} className="text-gray-600">
                ✕
              </button>
            </div>

            {/* 🔹 FORGOT PASSWORD */}
            {showForgot ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    await forgotPassword({ email: formData.email });
                    alert(
                      "If the email exists we'll send reset instructions."
                    );
                    setShowForgot(false);
                  } catch (err) {
                    alert("Error sending reset link");
                  }
                }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 mb-4"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1ABC9C] text-white py-2 rounded"
                >
                  Send Reset Link
                </button>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* --- SIGNUP FLOW --- */}
               {formType === "signup" && (
  <>
    {/* STEP 0: PERSONAL INFO */}
    {(!isBuilder || (isBuilder && builderStep === 0)) && (
      <>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input name="first_name" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input name="last_name" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input name="phone" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input name="email" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />

        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>

        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <div className="relative mb-4">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirm"
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </div>

        {/* 🔹 Checkbox moved here */}
        <div className="flex items-center gap-2 mb-4">
          <input
            id="builder"
            type="checkbox"
            checked={isBuilder}
            onChange={(e) => {
              setIsBuilder(e.target.checked);
              setBuilderStep(0);
            }}
          />
          <label htmlFor="builder">Join as Builder</label>
        </div>

        <button type="submit" className="w-full bg-[#1ABC9C] text-white py-2 rounded mt-2">
          {isBuilder ? "Next" : "Sign Up"}
        </button>
      </>
    )}

    {/* STEP 1: COMPANY INFO (unchanged) */}
    {isBuilder && builderStep === 1 && (
      <>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input name="company_name" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">Registration Number</label>
        <input name="registration_number" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">NTN Number</label>
        <input name="ntn_number" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
        <label className="block text-sm font-medium text-gray-700">License ID</label>
        <input name="license_id" onChange={handleChange} className="w-full border rounded px-3 py-2 mb-2" />
    <label className="block text-sm font-medium text-gray-700">License Picture</label>
<input
  type="file"
  name="license_picture"
  accept="application/pdf"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        alert("Only PDF files are allowed!");
        e.target.value = ""; // clear file input
        return;
      }
      setFormData({ ...formData, license_picture: file });
    }
  }}
  className="w-full border rounded px-3 py-2 mb-1"
/>
<p className="text-xs text-gray-500 mb-4">Please upload PDF document only.</p>


        <div className="flex gap-2">
          <button type="button" onClick={() => setBuilderStep(0)} className="w-1/2 border rounded py-2">
            Back
          </button>
          <button type="submit" className="w-1/2 bg-[#1ABC9C] text-white py-2 rounded">
            Finish
          </button>
        </div>
      </>
    )}
  </>
)}

                {/* --- LOGIN FLOW --- */}
                {formType === "login" && (
                  <>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      name="email"
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 mb-2"
                    />
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 mb-2"
                    />
                    <p
                      onClick={() => setShowForgot(true)}
                      className="text-sm text-right text-[#1ABC9C] cursor-pointer hover:underline"
                    >
                      Forgot Password?
                    </p>
                    <button
                      type="submit"
                      className="w-full bg-[#1ABC9C] text-white py-2 rounded mt-3"
                    >
                      Log In
                    </button>
                  </>
                )}

                {/* 🔹 TOGGLE TEXT AT BOTTOM */}
                <p className="text-sm text-center text-gray-600 mt-4">
                  {formType === "login" ? (
                    <>
                      Don’t have an account?{" "}
                      <span
                        onClick={() => setFormType("signup")}
                        className="text-[#1ABC9C] font-medium cursor-pointer"
                      >
                        Sign Up
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <span
                        onClick={() => setFormType("login")}
                        className="text-[#1ABC9C] font-medium cursor-pointer"
                      >
                        Sign In
                      </span>
                    </>
                  )}
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
