import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const AdminUpdateCategory = () => {
    const params=useParams();
    const navigate=useNavigate();
    const [form,setForm]=useState({
        categoryname:"",
        categorydetails:"",
    });
    const handleChange=(e)=>{
       const {name,value}=e.target;
       setForm({...form,[name]:value});
    }
    //************************************************** */
    //  GET CATEGORY DATA BY ID
    //************************************************** */
    const getCategoryById=async()=>{
          try{
            const response=await fetch(`http://168.231.116.183:3000/getcategorybyid/${params.id}`,{
                method:"GET",
                headers:{
                    'Content-Type':'application/json',
                },
            });
            const res_data=await response.json();
            console.log(res_data);
            if(response.ok){
                setForm({
                    categoryname:res_data.category.categoryname,
                    categorydetails:res_data.category.categorydetails,
                });
            }
          }catch(err){
            console.log(err);
          }
    }
    //************************************************** */
    //  SUBMIT FORM
    //************************************************** */
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch(`http://168.231.116.183:3000/updatecategory/${params.id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                },
                 body:JSON.stringify(form),
            });
            const res_data=await response.json();
            if(response.ok){
                toast.success("Category Updated Successfully.");
                navigate('/admin/categories');
            }else{
                toast.error(res_data);
            }
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
         getCategoryById();
    },[]);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO " />
      <h2 className="p-5 pb-0 text-2xl font-sketch">Update Category</h2>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdateCategory;

