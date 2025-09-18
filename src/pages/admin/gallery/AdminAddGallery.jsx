 import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const AdminAddGallery = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  //****
 const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = new FormData();
  for (const key in formData) {
    if (formData[key]) {
      payload.append(key, formData[key]);
    }
  }
  try {
    const response = await fetch(`${API_URL}/addImageGallery`, {
      method: "POST",
      body: payload,
    });
    const res_data = await response.json();
    if (response.ok) {
      toast.success("Image Added Successfully.");
      navigate("/admin/gallery");
    } else {
      toast.error(res_data.message || "Failed to add Image");
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO " />
      <div className="p-5 flex flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" md:w-1/2 bg-gray-700 p-5 rounded-md flex flex-col gap-3"
        >
          <Link to="/admin/gallery" className="ml-auto text-2xl">
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
              Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow duration-700 cursor-pointer p-2 roumd text-md font-sketch text-black rounded-md"
          >
            Add Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddGallery;
