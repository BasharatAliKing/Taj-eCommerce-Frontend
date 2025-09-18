import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
     <div className="hidden md:flex bg-[#FFD300] py-5 text-white">
        <ul className="flex gap-5 items-center justify-center mx-auto">
          <a href='#about-us' className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            About Us
          </a>
          {/* <FaStar className="text-[#4A4A4A]" /> */}
          {/* <a href='#food-menu' className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            Our Menus
          </a> */}
          <FaStar className="text-[#4A4A4A]" />
          <a href='#where-to-find-us' className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            Where to find us
          </a>
          {/* <FaStar className="text-[#4A4A4A]" /> */}
          {/* <a href='#catering' className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            events & catering
          </a> */}
          <FaStar className="text-[#4A4A4A]" />
          <a href="#contact-us" className="uppercase font-sketch text-[#4A4A4A] text-base cursor-pointer font-bold">
            contact us
          </a>
        </ul>
      </div>
  )
}

export default Menu
