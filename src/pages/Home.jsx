import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import OurVenues from "../components/OurVenues";
import Welcome from "../components/Welcome";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL; // ✅ Correct way in Vite
const Home = () => {
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
      <div className="absolute z-50 top-5 right-5">
        <Link
          to="/login"
          className=" bg-yellow text-charkol z-50 font-medium p-2 py-1 duration-500 cursor-pointer hover:scale-95 rounded-md"
        >
          Login
        </Link>
      </div>
      <Navbar />
      <Hero />
      <Menu />
      {/* welcome here */}
      <Welcome />
      {/* food to make */}
      {/* <section className="relative h-[60vh] lg:h-[120vh] bg-cover bg-center bg-[url(/bbq.webp)]">
        <img
          src="/hungry-lets-fix.png"
          className="absolute -top-15 md:-top-25 right-5 md:right-0 md:left-20 z-10 w-[30%] md:w-[15%]"
          alt="my-img"
        />
        <img
          data-aos="flip-right"
          src="/stars.svg"
          className="absolute -top-5 right-10 md:right-20 z-10 w-[20%] md:w-[6%]"
          alt="my-img"
        />
        <img
          data-aos="flip-right"
          src="/stars.svg"
          className="absolute -top-5 left-10 md:right-20 z-10 w-[20%] md:w-[6%]"
          alt="my-img"
        />
        <div className="absolute inset-0 bg-[#221b4b7a] bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <img data-aos="fade-up" src="/food-to-make-you-feel.png" alt="" />
          <img
            src="/yum-yum.png"
            width="20%"
            className="mr-auto ml-[20%]"
            alt=""
          />
        </div>
      </section> */}
      {/* food-Menus */}
      <div id="food-menu" className="relative py-30 bg-[#4A4A4A]">
        <img
          data-aos="flip-right"
          src="/100-halal.png"
          className="absolute -top-10 right-10 md:right-25 w-[30%] md:w-[10%]"
          alt=""
        />
        <div
          data-aos="fade-up-right"
          className="container w-full flex flex-col gap-10"
        >
          <img src="/food-menu.png" className="md:w-[50%]" alt="" />
         <ul className=" md:w-[50%]  text-charkol flex flex-wrap gap-y-5 gap-x-3 items-start font-semibold text-base lg:text-lg">
            <Link
              to="/our-menu"
              className=" capitalize bg-yellow duration-500 hover:scale-105 px-3 py-2 text-sm font-medium rounded-md text-charkol"
            >
              Our Menu
            </Link>
                   {category.map((val, index) => (
                      <Link
                        key={index}
                        to={`/product/${val.categoryname}`}
                        className=" capitalize bg-yellow duration-500 hover:scale-105 px-3 py-2 text-sm font-medium rounded-md text-charkol"
                      >
                        {val.categoryname}
                      </Link>
                    ))}
                    </ul>
          <div className="flex flex-col md:flex-row gap-5 md:w-[50%]">
            {/* <button className="bg-[#FFD300] p-3 font-sketch md:p-5 text-white hover:animate-scl font-medium text-base w-full rounded-md">
              CATERING
            </button> */}
          </div>
        </div>
        <div className="md:absolute flex flex-col mt-0 md:mt-auto gap-5 right-20 w-[300px] mx-auto top-30  z-20">
          <img
            data-aos="flip-right"
            src="/sparklewowed.png"
            className=""
            alt=""
          />
          <img
            data-aos="flip-right"
            src="/burger-outline--large.png"
            className=""
            alt=""
          />
          <img data-aos="flip-right" src="/homemade.png" className="" alt="" />
        </div>
      </div>
      {/* repeating background */}
      {/* <div className="relative py-16 bg-cover bg-center bg-[url(/repeating-background.png)]">
        <div className="container">
          <img data-aos="zoom-in-up" src="/100-superlicious.png" alt="" />
        </div>
      </div> */}
      <div className="flex absolute w-full">
        <img
          data-aos="flip-right"
          src="/stars.svg"
          className="absolute -top-10 md:-top-18 right-10 md:right-20  z-20 w-[15%] md:w-[6%]"
          alt="my-img"
        />
        <img
          data-aos="flip-right"
          src="/stars.svg"
          className="absolute left-10  md:left-20 top-10  z-20 w-[15%] md:w-[6%]"
          alt="my-img"
        />
        {/* <img src="/bg.png" className="relative w-full h-[250px] md:h-auto -mt-30 md:-mt-30 z-10" alt="my-img" /> */}
      </div>
      {/* my lahore rewards */}
      {/* <Rewards/> */}
       {/* yellow line image */}
      <div className="absolute z-10 hidden md:flex lg:mt-10 mx-auto w-full">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f0d200">
            <polygon points="0,0 60,0 100,100 40,100" />
            <polygon points="120,0 180,0 220,100 160,100" />
            <polygon points="240,0 300,0 340,100 280,100" />
            <polygon points="360,0 420,0 460,100 400,100" />
            <polygon points="480,0 540,0 580,100 520,100" />
            <polygon points="600,0 660,0 700,100 640,100" />
            <polygon points="720,0 780,0 820,100 760,100" />
            <polygon points="840,0 900,0 940,100 880,100" />
            <polygon points="960,0 1020,0 1060,100 1000,100" />
            <polygon points="1080,0 1140,0 1180,100 1120,100" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <OurVenues />
      </div>
      {/* yellow line image */}
      <div className="hidden md:flex w-full relative z-10">
        <div className="absolute -mt-15 w-full">
          <svg
            width="100%"
            height="100"
            viewBox="0 0 1200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#f0d200">
              <polygon points="0,0 60,0 100,100 40,100" />
              <polygon points="120,0 180,0 220,100 160,100" />
              <polygon points="240,0 300,0 340,100 280,100" />
              <polygon points="360,0 420,0 460,100 400,100" />
              <polygon points="480,0 540,0 580,100 520,100" />
              <polygon points="600,0 660,0 700,100 640,100" />
              <polygon points="720,0 780,0 820,100 760,100" />
              <polygon points="840,0 900,0 940,100 880,100" />
              <polygon points="960,0 1020,0 1060,100 1000,100" />
              <polygon points="1080,0 1140,0 1180,100 1120,100" />
            </g>
          </svg>
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default Home;
