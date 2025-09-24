import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import Select from "react-select";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const AdminUpdateFoodItem = () => {
  const params = useParams();
  const navigate = useNavigate();
    const [allFoods, setAllFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    size:"",
    description: "",
    imageUrl: "",
    available: "",
    suggestions: [],
  });
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
    // ✅ Handle suggestion change (multi-select IDs only)
  const handleSuggestionChange = (selected) => {
    const cleanSuggestions = (selected || [])
      .map((item) => item.value)
      .filter((id) => id && id.trim() !== ""); // remove empty
    setFormData((prev) => ({
      ...prev,
      suggestions: cleanSuggestions,
    }));
  };
  //*********************************************** */
  //            GET FOOD ITEMS
  //************************************************ */
  const getallCategories = async () => {
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
  //*********************************************** */
  //            GET FOOD ITEMS BY ID
  //************************************************ */
  const getFoodItemById = async () => {
    try {
      const response = await fetch(
        `${API_URL}/getfooditembyid/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res_data = await response.json();
      console.log(res_data);
      if (response.ok) {
        setFormData({
          name: res_data.foodItem.name,
          category: res_data.foodItem.category,
          price: res_data.foodItem.price,
          description: res_data.foodItem.description,
          available: res_data.foodItem.available,
          imageUrl: res_data.foodItem.imageUrl, // ✅ set actual image URL from backend
          suggestions:res_data.foodItem.suggestions,
          size:res_data.foodItem.size,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  //****
  const handleSubmit = async (e) => {
    e.preventDefault();
    // clean suggestions again before sending
    const cleanSuggestions = (formData.suggestions || []).filter(
      (id) => id && id.trim() !== ""
    );
    const payload = new FormData();
    for (const key in formData) {
      if (key === "suggestions") {
        cleanSuggestions.forEach((id) => payload.append("suggestions[]", id));
      } else if (formData[key]) {
        payload.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch(`${API_URL}/updatefooditem/${params.id}`, {
        method: "PUT",
        body: payload,
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("Food Item Updated Successfully.");
        navigate("/admin/fooditems");
      } else {
        toast.error(res_data.message || "Failed to Update food item");
      }
    } catch (err) {
      console.log(err);
    }
  };
    // ✅ Fetch food items for suggestions dropdown
    useEffect(() => {
      fetch(`${API_URL}/getallfoodItems`)
        .then((res) => res.json())
        .then((data) => {
          setAllFoods(
            (data.message || []).map((food) => ({
              value: food._id,
              label: food.name,
            }))
          );
        });
    }, []);
  useEffect(() => {
    getallCategories();
    getFoodItemById();
  }, []);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" md:w-1/2 bg-gray-700 p-5 rounded-md flex flex-col gap-3"
        >
          <Link to="/admin/fooditems" className="ml-auto text-2xl">
            <IoMdCloseCircleOutline />
          </Link>

          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            >
              <option value="">Select Category</option>
              {categories &&
                categories.map((val) => (
                  <option
                    key={val._id}
                    className="capitalize"
                    value={val.categoryname}
                  >
                    {val.categoryname}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
            {/* sixe */}
          <div className="flex flex-col gap-1">
            <label className="text-md lg:text-lg font-sketch font-medium">
              Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Image
            </label>
            {formData.imageUrl && (
              <img
                src={`${API_URL}/${formData.imageUrl}`}
                alt="Current"
                className="w-32 h-32 object-cover mb-2 rounded"
              />
            )}
            <input type="file" name="imageUrl" className="bg-gray p-2 text-black outline-none rounded-md" onChange={handleChange} />
          </div>
           <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Suggestion Items
            </label>
            <Select
              isMulti
              options={allFoods}
              value={allFoods.filter((food) => formData.suggestions.includes(food.value))} // preselected
              onChange={handleSuggestionChange}
              className="text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow duration-700 cursor-pointer p-2 roumd text-md font-sketch text-black rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateFoodItem;
