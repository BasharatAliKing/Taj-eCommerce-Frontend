import React, { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../useContext/UserContext";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Signup = () => {
     const {storetokeninLS} = useContext(UserContext)
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupForm),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Registration Successful.");
        setSignupForm({username:"",email:"",password:""});
        navigate('/home');
        storetokeninLS(res_data.token);
        
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
        className="relative p-5 bg-[#383838]  m-5 w-full sm:3/4 md:w-2/4  lg:w-1/4 flex flex-col gap-3 rounded-lg"
      >
        <h1 className="text-2xl text-center font-bold text-white ">
          Sign Up
        </h1>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray text-lg font-sketch ">
            Name
          </label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={signupForm.username}
            className="p-2 rounded-md w-full bg-gray outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray text-lg font-sketch">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={signupForm.email}
            className="p-2 rounded-md w-full bg-gray outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="" className="text-gray text-lg font-sketch">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={signupForm.password}
            className="p-2 rounded-md w-full bg-gray outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-sm text-white -mt-1">
          Already have an account{" "}
          <Link to="/login" className="font-bold hover:underline ">
            Login
          </Link>
        </p>
        <button
          type="submit"
          className="mt-2 text-white cursor-pointer font-sketch font-medium text-md bg-charkol p-2 rounded-md"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};
export default Signup;
