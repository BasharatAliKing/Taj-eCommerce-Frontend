import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../useContext/UserContext";

const API_URL = import.meta.env.VITE_API_URL; // ✅ Correct way in Vite

const Login = () => {
  const navigate = useNavigate();
  const { storetokeninLS, setRole } = useContext(UserContext);
  const [loginform, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginform, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginform),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("User Log In Successfully");
        setLoginForm({ email: "", password: "" });
        navigate("/home");
        storetokeninLS(res_data.token);
        // setRole(res_data.role);
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
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
            Log In
          </h1>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="font-sketch text-lg ">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={loginform.email}
              className="p-2 rounded-md w-full bg-gray outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="password"
              className=" font-sketch text-lg "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={loginform.password}
              className="p-2 rounded-md w-full bg-gray text-charkol outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-white hover:underline hover:text-blue-500 -mt-1"
          >
            Forgot Password ?
          </Link>
          <button
            type="submit"
            className="mt-2 text-white font-sketch cursor-pointer font-medium text-md bg-charkol p-2 rounded-md"
          >
            Submit
          </button>
          <p className="text-sm text-white text-center -mt-1">
            Don't have an account{" "}
            <Link to="/signup" className="font-bold hover:underline ">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
