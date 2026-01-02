import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../layouts/MenuHeader';
import Hero from '../components/MenuHero';
import BestSellers from '../components/BestSellers';
import FoodMenu from '../components/FoodMenu';
import Footer from '../layouts/MenuFooter';
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite

const OurMenu = () => {
  const [ourmenu, setOurMenu] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  const fetchRandomFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/foods-items-random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res_data = await response.json();
      if (response.ok) {
        setOurMenu(res_data);
      }
    } catch (err) {
      console.error("Error fetching foods:", err);
    } finally {
      setLoading(false); // ✅ Stop loading after API call finishes
    }
  };

  useEffect(() => {
    fetchRandomFoods();
  }, []);

  const filteredMenu = ourmenu.filter(
    (val) => val?.price > 0 && val?.category
  );

  if (loading) {
    // ✅ Loading screen
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          src="/logo.png"  // 👉 put your logo path here (public folder in Vite)
          alt="Loading..."
          className="w-24 h-24 animate-spin"
        />
      </div>
    );
  }
  return (
    <div className="bg-charkol bg-no-repeat bg-cover text-white">
     {/* <Header /> */}
      <Hero />
      <BestSellers />
      <FoodMenu />
      <div className="hidden md:flex w-full mt-10 relative z-10">
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
    </div>
  )
}
export default OurMenu;
