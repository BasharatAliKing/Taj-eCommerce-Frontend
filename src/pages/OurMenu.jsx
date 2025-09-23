import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
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
    <div className="bg-[#fdfdfb] flex flex-col gap-9 py-10">
      {/* Header Section */}
      <div className="flex container flex-col gap-3">
        <h2 className="text-3xl font-bold text-charkol capitalize">
          Our Menu
        </h2>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {filteredMenu.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          >
            <img
              src={`${API_URL}/${product.imageUrl}`}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center flex w-full font-sketch flex-col gap-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">£{product.price}</p>
              <Link
                to={`/product-details/${product._id}`}
                className="cursor-pointer bg-[#FFD600] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
              >
                Buy now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default OurMenu;
