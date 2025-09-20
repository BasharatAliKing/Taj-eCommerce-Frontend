import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import UserContext from "../useContext/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const {cart,total,setSearchItem}=useContext(UserContext);
  return (
    <header className="bg-charkol p-3 py-0 md:py-3 text-white">
      <div className="container mx-auto flex flex-wrap gap-3 items-center justify-between px-6 py-2 md:py-4">
        {/* Logo */}
        <Link to='/' className="flex items-center space-x-2">
          <img src="/logo.png" alt="my-img " className=" h-15 md:h-20 rounded-full" />
        </Link>
        {/* Cart */}
        <div className="relative flex flex-wrap gap-3 items-center space-x-4">
          <input type="text" onChange={(e)=>setSearchItem(e.target.value)} placeholder="Search Product..." className="hidden md:flex p-2 border rounded-full px-5 border-white outline-none" />
          {/* <Link to="/order">Order Online</Link> 👈 new link */}
          <Link to='/cart' className="flex whitespace-nowrap items-center gap-2 bg-[#FFD600] text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition">
            <FaShoppingCart className="text-lg" />
            <span>£{total.toFixed(2)} ({cart.length})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
