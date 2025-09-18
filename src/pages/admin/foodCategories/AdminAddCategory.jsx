import React, { useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const AdminAddCategory = () => {
    const navigate=useNavigate();
    const [form,setForm]=useState({
        categoryname:"",
        categorydetails:"",
    });
    const handleChange=(e)=>{
       const {name,value}=e.target;
       setForm({...form,[name]:value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('http://168.231.116.183:3000/addcategory',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                 body:JSON.stringify(form),
            });
            const res_data=await response.json();
            if(response.ok){
                toast.success("Category Added Successfully.");
                navigate('/admin/categories');
            }else{
                toast.error(res_data);
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO " />
      <div className="p-5 flex flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" md:w-1/2 bg-gray-700 p-5 rounded-md flex flex-col gap-3"
        >
          <Link to="/admin/categories" className="ml-auto text-2xl">
            <IoMdCloseCircleOutline />
          </Link>

          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Category Name
            </label>
            <input
              type="text"
              name="categoryname"
              value={form.categoryname}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Category Description
            </label>
            <textarea
              type="text"
              name="categorydetails"
              value={form.categorydetails}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            ></textarea>
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

export default AdminAddCategory;
