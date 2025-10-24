import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,  // Your backend route prefix
});

// Signup API
export const signup = (data) => API.post("/signup", data);

// Login API
export const login = (data) => API.post("/login", data);

// Forgot Password API
export const forgotPassword = (data) => API.post("/forgot-password", data);

// Reset Password API
export const resetPassword = (data) => API.post("/reset-password", data);

const API_URL = process.env.REACT_APP_API_URL;

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return await res.json();
}
