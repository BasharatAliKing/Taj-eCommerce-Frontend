import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// src/components/FoodMenu.jsx
const API_URL = import.meta.env.VITE_API_URL;

export default function FoodMenu() {
  const [category, setCategory] = useState([]);
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // 🔹 Get all categories
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

  // 🔹 Get all food items
  const getAllFoods = async () => {
    try {
      const response = await fetch(`${API_URL}/getallfooditems`);
      const json = await response.json();
      setFoods(json.message);
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Filter foods by selected category
  const filteredFoods = selectedCategory
    ? foods.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  useEffect(() => {
    getAllCategory();
    getAllFoods();
  }, []);

  return (
    <section className="py-10 container">
      <h3 className="text-4xl font-bold text-yellow text-center mb-8">
        Food Menu
      </h3>

      {/* ================= CATEGORY TABS ================= */}
      <div className="flex flex-wrap justify-center md:max-w-[70%] mx-auto gap-3 mb-10">
        {category.map((val, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(val.categoryname)}
            className={`p-2 font-medium text-sm py-1 cursor-pointer rounded-md capitalize transition-all
              ${
                selectedCategory === val.categoryname
                  ? "bg-yellow text-white"
                  : "bg-charkol text-yellow hover:bg-yellow hover:text-white"
              }`}
          >
            {val.categoryname}
          </button>
        ))}
      </div>

      {/* ================= FOOD ITEMS ================= */}
      <div className="grid md:grid-cols-2 gap-8 mx-auto">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <MenuItem
              key={item._id}
              id={item._id}
              img={item.imageUrl}
              name={item.name}
              desc={item.description}
              price={`£${item.price}`}
            />
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">
            No Item in this Category Coming Soon...
          </p>
        )}
      </div>
    </section>
  );
}

function MenuItem({ id, img, name, desc, price }) {
  return (
    <Link
      to={`/product-details/${id}`}
      className="flex hover:shadow-xl p-5 rounded-md justify-between gap-3 pb-4"
    >
      <img
        src={`${API_URL}/${img}`}
        className="h-20 w-20 my-auto rounded-md"
        alt=""
      />
      <div>
        <div className="border-b border-dotted flex justify-between items-center">
          <h4 className="font-semibold text-lg ">{name}</h4>
          <span className="font-bold text-yellow">{price}</span>
        </div>
        <p className="text-sm text-gray-500">
          {" "}
          {desc?.split(" ").slice(0, 18).join(" ")}
          {desc?.split(" ").length > 20 && " ..."}
        </p>
      </div>
    </Link>
  );
}
