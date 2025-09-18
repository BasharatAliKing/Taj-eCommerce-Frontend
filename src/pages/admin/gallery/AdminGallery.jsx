import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const AdminGallery = () => {
  const [item, setItem] = useState([]);
  //*********************************************** */
  //            DELETE FOOD ITEMS
  //************************************************ */
  const deleteGalleryImage = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Image ?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(
        `${API_URL}/deleteGalleryImage/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message || "Food Item Deleted Successfully.");
        getallgalleryImages();
      }
    } catch (err) {
      console.log(err);
    }
  };
  //*********************************************** */
  //            GET ALL FOOD ITEMS
  //************************************************ */
  const getallgalleryImages = async () => {
    try {
      const response = await fetch(`${API_URL}/getGalleryImages`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setItem(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallgalleryImages();
  }, []);
  
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <Link
          to="/admin/add-gallery-image"
          className="px-4 py-2 rounded-lg bg-green-500 text-white mr-auto"
        >
          Add Image
        </Link>
        <h1 className="text-2xl font-semibold font-sketch">Gallery Images </h1>
        <table className="min-w-full divide-y divide-gray-200 mt-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Img
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-black divide-gray-200">
            {item.map((val, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-10 w-10"
                    src={`${API_URL}/${val.image}`}
                    alt=""
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{val.name}</td>
                <td className="flex gap-2 px-6 py-6 whitespace-nowrap">
                  <button className="px-2 py-1 text-[14px] cursor-not-allowed bg-green-500 font-medium text-white rounded-md">
                    View
                  </button>
                  <Link
                    to={`/admin/update-gallery-image/${val._id}`}
                    className="px-2 py-1 cursor-pointer text-[14px] bg-yellow-500 font-medium text-white rounded-md"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      deleteGalleryImage(val._id);
                    }}
                    className="px-2 py-1 cursor-pointer text-[14px] bg-red-500 font-medium text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminGallery;
