import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { FaChevronDown, FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="absolute container flex w-full p-2 z-20">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="logo"
        className="w-[30%] md:w-[10%] my-5 rounded-full"
      />
      {/* Mobile Menu Overlay */}
      {navbar && (
        <div className="fixed bg-charkol h-full overflow-scroll w-full left-0 top-0 z-40">
          {/* menu items go here */}
       <div className="flex flex-col gap-2 ml-5 justify-end mb-20 mt-auto h-[90vh] w-full">
          <ul className='flex flex-col gap-2 '>
           <a onClick={()=>{setNavbar(false)}} href='#about-us' className='text-white font-bold font-sketch text-2xl uppercase'>About Us</a>
          <a onClick={()=>{setNavbar(false)}} href='#menu' className='text-white font-bold font-sketch text-2xl uppercase'>Our Menus</a>
          <a onClick={()=>{setNavbar(false)}} href='#where-to-find-us' className='text-white font-bold font-sketch text-2xl uppercase'>where to find us</a>
          <a onClick={()=>{setNavbar(false)}} href='#events' className='text-white font-bold font-sketch text-2xl uppercase'>events & catering</a>
          <a onClick={()=>{setNavbar(false)}} href='#contact-us' className='text-white font-bold font-sketch text-2xl uppercase'>contact us</a>
         </ul>
         <hr className='w-15 h-[2px] text-white ' />
          <ul className='flex flex-col gap-2'>
           <li className='text-white font-bold font-sketch text-base '>Join the family</li>
          <li className='text-white font-bold font-sketch text-base '>Our Heritage</li>
          <li className='text-white font-bold font-sketch text-base '>Allergen Info</li>
          <li className='text-white font-bold font-sketch text-base '>Gift Cards</li>
          <li className='text-white font-bold font-sketch text-base '>Rewards</li>
          <li className='text-white font-bold font-sketch text-base '>Gallery</li>
          <li className='text-white font-bold font-sketch text-base '>Feedback</li>
          <li className='text-white font-bold font-sketch text-base '>FAQs</li>
         </ul>
              <ul className="flex items-center gap-2">
              <Link
                data-tooltip-id="telegram"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaInstagram className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="twitter"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaXTwitter className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="youtube"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaYoutube className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="tiktok"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaTiktok className="text-white text-md" />{" "}
              </Link>
              <Link
                data-tooltip-id="facebook"
                to=""
                className="w-10 h-10 rounded-full border-2 border-white/80 flex items-center justify-center"
              >
                <FaFacebookF className="text-white text-md" />{" "}
              </Link>
            </ul>
       </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
