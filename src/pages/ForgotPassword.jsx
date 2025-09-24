import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Correct way in Vite

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
    } else {
      toast.error("Error: Network Connection Lost !");
    }
  };
  return (
    <div className="relative top-0 md:h-screen bg-cover bg-center bg-[url(/home-bg.jpg)]">
      <div className=" md:absolute pt-[500px] md:pt-0 pb-10 inset-0 bg-[#221b4b80] bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="relative p-5 bg-[#313131] m-5 w-full sm:3/4 md:w-2/4 lg:w-1/4 flex flex-col gap-3 rounded-lg"
      >
        <h1 className="text-2xl text-center font-bold font-sketch text-white ">
          Forgot Password
        </h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-gray font-sketch text-lg ">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
             className="p-2 rounded-md w-full bg-gray outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>
        <button
          type="submit"
           className="mt-2 text-white font-sketch cursor-pointer font-medium text-md bg-charkol p-2 rounded-md"
        >
          Send Reset Link
        </button>
      </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
