import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import UserContext from "../useContext/UserContext";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const API_URL = import.meta.env.VITE_API_URL; // ✅ Correct way in Vite
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { cart, total, setSearchItem, user } = useContext(UserContext);
  const [showMore, setShowMore] = useState(false);
  const [category, setCategory] = useState([]);
  const getAllCategory = async () => {
    try {
      const response = await fetch(`${API_URL}/getallcategory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCategory(json.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <>
      <header className="bg-charkol sticky p-3 py-0  text-white">
        <div className="md:container flex flex-wrap gap-3 items-center justify-between md:px-6 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="my-img "
              className=" h-15 md:h-20 rounded-full"
            />
          </Link>
          {/* Cart */}
          <div className="relative flex flex-wrap gap-3 items-center space-x-4">
            <input
              type="text"
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Search Product..."
              className="hidden md:flex p-2 border rounded-full px-5 border-white outline-none"
            />
            {/* <Link to="/order">Order Online</Link> 👈 new link */}
            <Link
              to="/cart"
              className="flex whitespace-nowrap items-center gap-2 bg-[#FFD600] text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition"
            >
              <FaShoppingCart className="text-lg" />
              <span>
                £{total.toFixed(2)} ({cart.length})
              </span>
            </Link>
          </div>
        </div>
      </header>
      {/* <nav className="bg-yellow hidden md:flex py-2">
        <div className="container py-4">
          <ul className=" text-charkol flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-semibold text-base lg:text-lg">
            <Link
              className="bg-charkol p-2 py-1 rounded-md text-yellow capitalize"
              to="/our-menu"
            >
              Our Menu
            </Link>
            {category.map((val, index) => (
              <Link
                key={index}
                to={`/product/${val.categoryname}`}
                className="bg-charkol p-2 py-1 rounded-md text-yellow capitalize"
              >
                {val.categoryname}
              </Link>
            ))}
            <button className="bg-charkol text-yellow p-2 py-1 duration-500 cursor-pointer hover:scale-95 rounded-md">
              {user.role === "admin" ? (
                <Link to="/admin">Dashboard</Link>
              ) : user.role === "user" ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </button>
          </ul>
        </div>
      </nav> */}
      <div className="bg-yellow text-charkol md:hidden py-2">
        <div className="container flex flex-row items-center justify-between">
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className="text-2xl"
          >
            {menu ? <IoClose /> : <IoMdMenu />}
          </div>
          <input
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Search Product..."
            className="flex p-2 text-sm border rounded-full px-5  ring ring-charkol outline-none"
          />
        </div>
      </div>

      {menu ? (
        <nav className=" bg-yellow py-2 mt-[2px]">
          <div className="container flex flex-col gap-5 md:flex-row text-center justify-around text-charkol md:flex items-center font-medium text-base">
            <Link
              onClick={() => {
                setMenu(false);
              }}
              to="/our-menu"
            >
              Our Menu
            </Link>
            {category.map((val, index) => (
              <Link
                key={index}
                onClick={() => {
                  setMenu(false);
                }}
                to={`/product/${val.categoryname}`}
                className=" capitalize"
              >
                {val.categoryname}
              </Link>
            ))}
            <button className="bg-charkol text-yellow p-2 py-1 duration-500 cursor-pointer hover:scale-95 rounded-md">
              {user.role === "admin" ? (
                <Link to="/admin">Dashboard</Link>
              ) : user.role === "user" ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <Link to="/login">LogIn</Link>
              )}
            </button>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Header;
