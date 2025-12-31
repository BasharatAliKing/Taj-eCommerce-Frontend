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
      <Footer />
      {/* Header Section */}
      {/* <div className="flex container flex-col gap-3">
        <h2 className="text-3xl font-bold text-charkol capitalize">
          Our Menu
        </h2>
      </div> */}
      {/* Product Grid */}
      {/* <div className="container mx-auto px-6 py-12 grid gap-8 grid-cols-1 md:grid-cols-2">
        {filteredMenu.map((item, index) => (
    <Link key={index} to={`/product-details/${item._id}`} class="flex flex-col sm:flex-row items-start rounded-2xl  overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
  <div class="sm:w-24 sm:h-24 relative overflow-hidden flex-shrink-0">
    <img
      src={`${API_URL}/${item.imageUrl}`}
      alt="Mixed Grill Starter"
      class="w-full h-full object-cover rounded-xl"
    />
       {item.size ? <p className="absolute flex sm:hidden capitalize top-3 right-3 z-50 bg-yellow px-2 py-1 text-sm rounded-md text-charkol font-medium">{item.size}</p>:null}
  </div>
  <div class="sm:ml-4 my-auto flex-1">
    <div class="flex justify-between items-center pb-1 mb-1 border-b-2 border-gray-400 border-dotted">
      <span class="text-lg font-semibold flex flex-col sm:flex-row gap-3 ">{item.name}{item.size ? <p className="capitalize hidden sm:flex mb-auto bg-yellow px-2 py-1 text-sm  text-charkol font-medium rounded-md">{item.size}</p>:null}</span>
      <span class="text-charkol font-bold">£{item.price}</span>
    </div>
    <p class="text-gray-600 text-sm leading-snug">
   {item.description
    ?.split(" ")
    .slice(0, 10)
    .join(" ") + (item.description?.split(" ").length > 10 ? "..." : "")}
    </p>
  </div>
</Link>

          // <div
          //   key={index}
          //   className="bg-white relative shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          // >
          //     {product.size ? <p className="absolute capitalize top-3 right-3 z-50 bg-yellow px-2 py-1 text-sm rounded-md text-charkol font-medium">{product.size}</p>:null}
          //   <img
          //     src={`${API_URL}/${product.imageUrl}`}
          //     alt={product.name}
          //     className="w-full h-64 object-cover"
          //   />
          //   <div className="p-4 text-center flex w-full font-sketch flex-col gap-2">
          //     <h3 className="text-lg font-semibold">{product.name}</h3>
          //     <p className="text-gray-700">£{product.price}</p>
          //     <Link
          //       to={`/product-details/${product._id}`}
          //       className="cursor-pointer bg-[#FFD600] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
          //     >
          //       Buy now
          //     </Link>
          //   </div>
          // </div>
        ))}
      </div> */}
    </div>
  )
}
export default OurMenu;
