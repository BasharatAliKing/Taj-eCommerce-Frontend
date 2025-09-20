import React from "react";
import Hero from "../components/Hero";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import OurVenues from "../components/OurVenues";
import Welcome from "../components/Welcome";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Home = () => {
  
  return (
    <>
      <Navbar />
      <Hero />
    <Menu/>
      {/* welcome here */}
      <Welcome/>
      {/* food to make */}
      <section  className="relative h-[60vh] lg:h-[120vh] bg-cover bg-center bg-[url(/bbq.webp)]">
        {/* <img
          src="/hungry-lets-fix.png"
          className="absolute -top-15 md:-top-25 right-5 md:right-0 md:left-20 z-10 w-[30%] md:w-[15%]"
          alt="my-img"
        /> */}
        <img
        data-aos="flip-right"
          src="/stars.svg"
          className="absolute -top-5 right-20 z-10"
          width="6%"
          alt=""
        />
        <div  className="absolute inset-0 bg-[#221b4b7a] bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
          <img data-aos="fade-up" src="/food-to-make-you-feel.png" alt="" />
          <img
            src="/yum-yum.png"
            width="20%"
            className="mr-auto ml-[20%]"
            alt=""
          />
        </div>
      </section>
      {/* food-Menus */}
      <div id="food-menu" className="relative py-16 bg-[#4A4A4A]">
        <img data-aos="flip-right" src="/100-halal.png" className="absolute -top-10 right-10 md:right-25 w-[30%] md:w-[15%]"  alt="" />
        <div  data-aos="fade-up-right" className="container w-full flex flex-col gap-10">
          <img src="/our-food-menus--large.png" className="md:w-[50%]" alt="" />
          <p className="md:w-[50%] text-base text-white font-semibold">
            If variety is the spice of life…we’re pretty hot! At K2 Taj you’ll
            enjoy traditional tastes with a modern twist (and a personal touch)
            as we get creative with the finest, freshest ingredients. Tuck into
            our 100% halal choices below:
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:w-[50%]">
            <Link to='/our-menu' className="bg-[#FFD300] text-center p-2 font-sketch md:p-3 text-black hover:animate-scl font-medium text-base md:text-lg w-full rounded-md">
              MAIN MENU
            </Link>
            {/* <button className="bg-[#FFD300] p-3 font-sketch md:p-5 text-white hover:animate-scl font-medium text-base w-full rounded-md">
              CATERING
            </button> */}
          </div>
        </div>
           <div className="md:absolute flex flex-col mt-10 md:mt-auto gap-5 right-20 w-[300px] mx-auto top-70  z-20">
          <img data-aos="flip-right" src="/sparklewowed.png" className="" alt="" />
          <img data-aos="flip-right" src="/burger-outline--large.png" className="" alt="" />
          <img data-aos="flip-right" src="/homemade.png" className="" alt="" />
        </div>
      </div>
      {/* repeating background */}
      <div  className="relative py-16 bg-cover bg-center bg-[url(/repeating-background.png)]">
        <div className="container">
          <img data-aos="zoom-in-up" src="/100-superlicious.png" alt="" />
        </div>
      </div>
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
        <img src="/bg.png" className="relative w-full h-[250px] md:h-auto -mt-30 md:-mt-30 z-10" alt="my-img" />
      </div>
      {/* my lahore rewards */}
     {/* <Rewards/> */}
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
      {/* fusion to be celebrated */}
      {/* <Fusion/> */}
      {/* instagram post */}
      {/* <div className="bg-charkol md:pt-40 py-30 md:py-16 -mt-10">
        <h1 className="text-xl text-white mt-5 font-bold uppercase text-center font-dancing">
          Checkout our Instagram for latest updates
        </h1>
      </div> */}
      {/* Catering for Special Occasions */}
     {/* <Catering/> */}
      <Footer/>
    </>
  );
};

export default Home;
