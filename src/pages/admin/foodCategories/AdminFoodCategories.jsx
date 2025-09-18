
import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const AdminFoodCategories = () => {
  const [item, setItem] = useState([]);
 //*********************************************** */
 //            GET FOOD ITEMS
 //************************************************ */
  const getallfoodItems = async () => {
    try {
      const response = await fetch(`${API_URL}/getallcategory`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setItem(json.categories);
    } catch (error) {
      console.log(error);
    }
  };
   //*********************************************** */
 //            GET FOOD ITEMS
 //************************************************ */
  const deleteCategory=async(id)=>{
     const confirmDelete = window.confirm(
      "Are you sure you want to delete this Category ?"
    );
     if (!confirmDelete) return;
    try{
      const response=await fetch(`${API_URL}/deletecategory/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const res_data=await response.json();
      if(response.ok){
        toast.success(res_data.message || "Category Deleted Successfully.");
        getallfoodItems();
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getallfoodItems();
  }, []);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO Fields" />
      <div className="p-5 flex flex-col gap-5">
        <Link
          to="/admin/addCategory"
          className="px-4 py-2 rounded-lg bg-green-500 text-white mr-auto"
        >
          Add Category
        </Link>
        <h1 className="text-2xl font-semibold font-sketch">Food Categories </h1>
        <table className="min-w-full divide-y divide-gray-200 mt-5">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
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
                
                <td className="px-6 py-4 whitespace-nowrap capitalize">{val.categoryname}</td>
                <td className="flex gap-2 px-6 py-6 whitespace-nowrap">
                  <button className="px-2 py-1 text-[14px] cursor-not-allowed bg-green-500 font-medium text-white rounded-md">
                    View
                  </button>
                  <Link
                    to={`/admin/updateCategory/${val._id}`}
                    className="px-2 py-1 cursor-pointer text-[14px] bg-yellow-500 font-medium text-white rounded-md"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => {
                      deleteCategory(val._id);
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

export default AdminFoodCategories;

