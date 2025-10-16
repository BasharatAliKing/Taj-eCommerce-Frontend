import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Product = () => {
  const params = useParams();
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(true); // ✅ Add loading state
  const getallfoodItems = async () => {
    try {
      const response = await fetch(`${API_URL}/getallfoodItems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setItem(json.message);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // ✅ Stop loading after API call finishes
    }
  };
  const getAllCategory = async () => {
    try {
      const response = await fetch(`${API_URL}/getallcategory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setCategories(json.categories);
    } catch (error) {
      console.log(error);
    }
  };
  const filteredCategory = categories.filter(
    (cat) =>
      cat?.categoryname?.toLowerCase() === (params.id || "").toLowerCase()
  );
 const filteredProducts = item.filter(
  (val) =>
    val?.category?.toLowerCase() === (params.id || "").toLowerCase() &&
    val?.price > 0
);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [search, setSearch] = useState("");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  useEffect(() => {
    getallfoodItems();
    getAllCategory();
  }, []);
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
    <div className="bg-[#fdfdfb] flex flex-col gap-5 py-10">
      {/* Header Section */}
      <div className="flex container flex-col gap-3">
        <h2 className="text-3xl font-bold text-charkol capitalize">
          {params.id}
        </h2>
        <p className=" text-lg font-sketch md:w-[70%]">
          {filteredCategory.length > 0
            ? filteredCategory[0]?.categorydetails
            : ""}
        </p>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2">
        {paginatedProducts.map((item, index) => (
           <Link key={index} to={`/product-details/${item._id}`} class="flex bg-white shadow-md items-start rounded-2xl  overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
           <div class="w-24 h-24 relative overflow-hidden flex-shrink-0">
             <img
               src={`${API_URL}/${item.imageUrl}`}
               alt="Mixed Grill Starter"
               class="w-full h-full object-cover rounded-xl"
             />
                
           </div>
           <div class="ml-4 my-auto flex-1">
             <div class="flex justify-between items-center pb-1 mb-1 border-b-2 border-gray-400 border-dotted">
               <span class="text-lg font-semibold flex gap-3 ">{item.name}{item.size ? <p className="capitalize  bg-yellow px-2 py-1 text-sm  text-charkol font-medium rounded-md">{item.size}</p>:null}</span>
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
        ))}
      </div>
      <div className="container mt-10 flex justify-between items-center p-4">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredProducts.length)} of{" "}
          {filteredProducts.length} entries
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-charkol text-white rounded disabled:opacity-50 font-medium text-sm"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                endIndex < filteredProducts.length ? prev + 1 : prev
              )
            }
            disabled={endIndex >= filteredProducts.length}
            className="px-3 py-1 font-medium text-sm text-white bg-charkol rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Product;
