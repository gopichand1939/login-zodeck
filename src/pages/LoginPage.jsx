import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/zodeck-logo.png";
import loginImage from "../assets/login-illustration1.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Both fields are required.");
      toast.error("❌ Both fields are required.");
      return;
    }

    try {
      const res = await fetch("http://13.203.198.63:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("role", data.role);
        toast.success("✅ Logged in successfully!", { autoClose: 3000 });
        setTimeout(() => navigate("/dashboard"), 3000);
      } else {
        setError(data.msg || "Login failed.");
        toast.error(data.msg || "❌ Invalid credentials.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setError("Server unreachable.");
      toast.error("❌ Server unreachable or error occurred.");
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 bg-[#b9d9ff] hidden md:block">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 bg-[#b9d9ff] flex items-center justify-center relative px-4">
        <div className="absolute top-16 right-16 w-80 h-80 bg-white opacity-20 blur-2xl rounded-full pointer-events-none"></div>

        <div className="relative w-full max-w-md bg-white/30 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-3xl p-10 space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-white/60 rounded-full flex items-center justify-center shadow-md">
              <img src={logo} alt="Zodeck Logo" className="w-6 h-6" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Login to Zodeck</h2>
            <p className="text-sm text-gray-700">Please enter your credentials to sign in.</p>
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-600 bg-white/30 p-2 rounded text-center text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Email or Employee ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-md bg-white/70 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-white/70 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-cyan-600 transition"
            >
              Login
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <div className="flex-1 h-px bg-gray-300" />
          <div className="flex-1 h-px bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
