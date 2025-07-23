// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://13.203.198.63:3000", // 🔥 Directly hardcoded URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
