import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// If an API URL is set, use axios to call real backend routes under /auth
let useMock = !API_URL;

const API = axios.create({ baseURL: API_URL ? `${API_URL}/auth` : "/auth" });

// Helper: simple in-memory/localStorage mock for users
function _getMockUsers() {
  try {
    const raw = localStorage.getItem("__mock_users_v1");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function _saveMockUsers(users) {
  localStorage.setItem("__mock_users_v1", JSON.stringify(users));
}

function _mockDelay(result) {
  return new Promise((res) => setTimeout(() => res(result), 400));
}

// Signup API
export const signup = (data) => {
  if (!useMock) return API.post("/signup", data);

  const users = _getMockUsers();
  const exists = users.find((u) => u.email === data.email);
  if (exists) return Promise.reject({ response: { data: { message: "Email already registered" } } });

  const newUser = {
    id: Date.now(),
    first_name: data.first_name || "",
    last_name: data.last_name || "",
    phone: data.phone || "",
    email: data.email,
    password: data.password, // mock - not hashed
  };
  users.push(newUser);
  _saveMockUsers(users);
  return _mockDelay({ data: { message: "ok" } });
};

// Login API
export const login = (data) => {
  if (!useMock) return API.post("/login", data);

  const users = _getMockUsers();
  const user = users.find((u) => u.email === data.email && u.password === data.password);
  if (!user) return Promise.reject({ response: { data: { message: "Invalid credentials" } } });

  // return shape similar to many APIs
  return _mockDelay({ data: { token: `mock-token-${user.id}`, user: { id: user.id, email: user.email, first_name: user.first_name } } });
};

// Forgot Password API (mocked)
export const forgotPassword = (data) => {
  if (!useMock) return API.post("/forgot-password", data);
  const users = _getMockUsers();
  const user = users.find((u) => u.email === data.email);
  if (!user) return Promise.reject({ response: { data: { message: "Email not found" } } });
  // In a real app we'd send an email. Here just resolve.
  return _mockDelay({ data: { message: "reset_link_sent" } });
};

// Reset Password API (mocked)
export const resetPassword = (data) => {
  if (!useMock) return API.post("/reset-password", data);
  const users = _getMockUsers();
  const idx = users.findIndex((u) => u.email === data.email);
  if (idx === -1) return Promise.reject({ response: { data: { message: "Email not found" } } });
  users[idx].password = data.password;
  _saveMockUsers(users);
  return _mockDelay({ data: { message: "password_updated" } });
};

export async function loginUser(email, password) {
  if (!useMock) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      mode: "cors",
    });
    return await res.json();
  }
  const resp = await login({ email, password });
  return resp.data;
}
