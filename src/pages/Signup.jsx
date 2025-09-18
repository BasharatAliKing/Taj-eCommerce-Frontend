import React, { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../useContext/UserContext";
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
      const response = await fetch(`http://168.231.116.183:3000/signup`, {
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
    <div className="h-screen flex items-center justify-center bg-charkol bg-center bg-cover bg-no-repeat bg-fixed overflow-y-auto">
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
  );
};
export default Signup;
