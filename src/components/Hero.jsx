import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Hero = () => {
      const [category,setCategory]=useState([]);

      const getAllCategory=async()=>{
        try {
            const response=await fetch(`${API_URL}/getallcategory`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const json=await response.json();
            setCategory(json.categories);
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(()=>{
        getAllCategory();
      },[]);
  return (
    <section className="relative top-0 md:h-screen bg-cover bg-center bg-[url(/home-bg.jpg)]">
      <div className=" md:absolute pt-[500px] md:pt-0 pb-10 inset-0 bg-[#221b4b80] bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6">
      <h1 data-aos="fade-down" className="text-3xl sm:text-5xl md:text-6xl leading-tight font-bold text-yellow pb-10 uppercase">Where Blackburn <br /> <span className="underline">Eats Authentic</span></h1>
       <div className="flex flex-wrap gap-4">
          <a href="/our-menu" data-aos="zoom-in" className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-orange.png)]">OUR MENUS</a>
          <Link to="/desserts" className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-pink.png)]">DESSERTS</Link>
          <Link to="/our-menu" className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  b  bg-[url(/button-pattern-green.png)]">DEALS</Link>
         {/* {
            category.map((cat,index)=>(
              <Link key={index} data-aos="zoom-in" to={`/product/${cat.categoryname}`} className="flex w-full uppercase cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  bg  bg-[url(/button-pattern-orange.png)]">{cat.categoryname}</Link>
            ))
         } */}
          {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-yellow.png)]">EVENTS & CATERING</button>  */}
        </div>
      </div>
      <div data-aos="flip-left" className="absolute top-[20%] md:top-[25%] right-20  md:right-35 flex flex-col gap-0">
          <div className="absolute top-[16px] left-20 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-12 left-[30px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-25 left-[14px]  animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-38 left-[36px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-7 right-13 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[90px] right-[15px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[154px] right-[38px] animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-[178px] left-24 animate-bulb w-2 h-2 bg-white rounded-full"></div>
          <img src="/hungry-lets-fix.png" alt="my-img" className=" rounded-full w-50 h-50" />
          <img src="/order-onlinetwo.png" width="100%" className="absolute top-27" alt="" />
      </div>
    </section>
  );
};

export default Hero;
