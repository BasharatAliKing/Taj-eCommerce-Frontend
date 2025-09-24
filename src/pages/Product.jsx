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
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {paginatedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white relative shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          >
           {product.size ? <p className="absolute capitalize top-3 right-3 z-50 bg-yellow px-2 py-1 text-sm rounded-md text-charkol font-medium">{product.size}</p>:null}
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
                className="cursor-pointer bg-[#FFD600] text-black  font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
              >
                Buy now
              </Link>
            </div>
          </div>
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
