import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../useContext/UserContext";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const SearchPage = () => {
  const params = useParams();
  const navigate=useNavigate();
  const { searchItem ,setSearchItem } = useContext(UserContext);
  const [item, setItem] = useState([]);
  const [categories, setCategories] = useState([]);

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
  const searchbuynow=(id)=>{
    navigate(`/product-details/${id}`)
    setSearchItem("");
  }
 const filteredProducts = item.filter(
  (val) =>
    val?.name?.toLowerCase().includes(searchItem.toLowerCase()) &&
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
  return (
    <div className="bg-[#fdfdfb] flex flex-col gap-5 py-10">
      {/* Header Section */}
      <div className="flex container flex-col gap-3">
        <h2 className="text-3xl font-bold text-charkol capitalize">
          Search Result: {searchItem}
        </h2>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {paginatedProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          >
            <img
              src={`${API_URL}/${product.imageUrl}`}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center flex font-sketch flex-col gap-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">£{product.price}</p>
              <button onClick={()=>searchbuynow(`${product._id}`)}
                className="cursor-pointer bg-[#FFD600] text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
              >
                Buy now
              </button>
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

export default SearchPage;
