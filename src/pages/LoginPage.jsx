import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowRight } from "react-icons/fi";
import logo from "../assets/zodeck-logo.png";
import illustration from "../assets/sanap-removebg-preview.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://13.203.198.63:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("role", data.role);
        toast.success("✅ Logged in successfully!", { autoClose: 10000 });
        setTimeout(() => navigate("/dashboard"), 10000);
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
  <div className="w-full h-screen flex items-center justify-center bg-[#153A63] text-white px-4">
    {/* Outer Container with shadow */}
    <div className="flex flex-col lg:flex-row w-full max-w-6xl rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-500">

     
     
    {/* LEFT SIDE: Login Form (no card container) */}
<div className="flex-1 flex items-center justify-center p-8">
  <div className="w-full max-w-md space-y-6">
    <div className="flex items-center gap-3 mb-3">
      <h2 className="text-2xl font-semibold text-white">Login to Zodeck</h2>
      <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
    </div>

    {error && (
      <div className="text-red-400 bg-white/20 p-2 rounded text-center text-sm">
        {error}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Email or Employee ID"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 rounded-md bg-white/10 border border-white/20 placeholder-gray-400 text-white outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 rounded-md bg-white/10 border border-white/20 placeholder-gray-400 text-white outline-none"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-md hover:from-blue-600 hover:to-cyan-600 transition"
      >
        Login
      </button>
    </form>
  </div>
</div>


      {/* RIGHT SIDE: Image */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        <img
          src={illustration}
          alt="Fingerprint login"
          className="w-full max-w-[500px] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    <ToastContainer position="top-center" />
  </div>
);

}
