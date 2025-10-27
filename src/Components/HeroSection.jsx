import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signup, login, forgotPassword } from "../api/auth";
import { useAuthModal } from "../context/AuthModalContext";

const HeroSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { isOpen: showForm, openAuth, closeAuth, formType, setFormType, showForgot, setShowForgot } = useAuthModal();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Updated handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡️ Step 1: Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address!");
      return;
    }

    // 🧠 Step 2: Restrict to real providers (optional but smart)
    const validDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
    const domain = formData.email.split("@")[1];
    if (!validDomains.includes(domain)) {
      alert("Please use a valid email provider like Gmail, Yahoo, or Outlook.");
      return;
    }

    try {
      if (formType === "signup") {
        if (formData.password !== formData.confirm) {
          alert("Passwords do not match!");
          return;
        }

        await signup(formData);
        alert("Signup successful! Please log in now.");
        setFormType("login");
      } else {
        const { data } = await login({
          email: formData.email,
          password: formData.password,
        });
  localStorage.setItem("token", data.token);
  alert("Login successful!");
  closeAuth();
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  // ✅ Forgot password handler
  const handleForgotSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email: formData.email });
      alert("Password reset link has been sent to your email!");
      setShowForgot(false);
    } catch (error) {
      alert(error.response?.data?.message || "Unable to send reset link.");
    }
  };

  return (
<section className="hero-section flex flex-col items-center justify-center min-h-screen bg-white text-center px-6 relative overflow-hidden z-0 pt-[100px]">
      {/* Background overlay */}
      {showForm && (
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20"
          onClick={() => closeAuth()}
        ></div>
      )}

      {/* Navigation */}
      <nav className="absolute top-6 right-10 flex gap-8 text-gray-700 text-sm font-medium">
        <a
          href="#"
          className="border border-gray-400 text-white px-6 py-3 rounded-md font-medium hover:border-[#1ABC9C] hover:text-[#1ABC9C] transition"
          onClick={(e) => {
            e.preventDefault();
            openAuth("signup");
          }}
        >
          Register / Sign In
        </a>
        <button
          onClick={() =>
            document
              .getElementById("how-it-works")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="border border-gray-400 text-white px-6 py-3 rounded-md font-medium hover:border-[#1ABC9C] hover:text-[#1ABC9C] transition"
        >
          Learn How It Works
        </button>
      </nav>

      {/* Hero Text */}
      <div className="z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold">Find Your Dream Home</h1>
        <p className="text-2xl mt-2">New or Pre-Owned</p>
      </div>

      {/* Slide-in Form */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl transform transition-transform duration-500 z-30 ${
          showForm ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-[#1a2a33]">
            {showForgot ? "Reset Password 🔒" : formType === "login" ? "Welcome Back 👋" : "Create Account 🏡"}
          </h2>
          <button
            onClick={() => {
              closeAuth();
              setShowForgot(false);
            }}
            className="text-gray-500 hover:text-[#1ABC9C]"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          {/* Forgot Password Form */}
          {showForgot ? (
            <form className="flex flex-col gap-4" onSubmit={handleForgotSubmit}>
              <p className="text-gray-600 text-sm mb-2">
                Enter your registered email to receive a password reset link.
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
              />
              <button
                type="submit"
                className="bg-[#1ABC9C] text-white py-2 rounded-md hover:bg-[#16a085] transition"
              >
                Send Reset Link
              </button>
              <p
                onClick={() => setShowForgot(false)}
                className="text-sm text-center text-[#1ABC9C] cursor-pointer hover:underline mt-2"
              >
                ← Back to Login
              </p>
            </form>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {formType === "signup" && (
                <>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
                  />
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#1ABC9C]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1ABC9C]"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirm"
                      value={formData.confirm}
                      onChange={handleChange}
                      placeholder="Confirm Password"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#1ABC9C]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1ABC9C]"
                    >
                      {showConfirm ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                  </div>
                </>
              )}

              {formType === "login" && (
                <>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#1ABC9C]"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:border-[#1ABC9C]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1ABC9C]"
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </button>
                  </div>
                  <p
                    onClick={() => setShowForgot(true)}
                    className="text-sm text-right text-[#1ABC9C] cursor-pointer hover:underline"
                  >
                    Forgot Password?
                  </p>
                </>
              )}

              <button
                type="submit"
                className="bg-[#1ABC9C] text-white py-2 rounded-md hover:bg-[#16a085] transition"
              >
                {formType === "login" ? "Log In" : "Sign Up"}
              </button>

              <p className="text-sm text-center text-gray-600 mt-4">
                {formType === "login" ? (
                  <>
                    Don’t have an account?{" "}
                    <span
                      onClick={() => setFormType("signup")}
                      className="text-[#1ABC9C] font-medium cursor-pointer hover:underline"
                    >
                      Sign Up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      onClick={() => setFormType("login")}
                      className="text-[#1ABC9C] font-medium cursor-pointer hover:underline"
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
    </section>
  );
};

export default HeroSection;
