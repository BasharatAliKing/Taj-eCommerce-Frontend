import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const OurMenu = () => {
    const [ourmenu,setOurMenu]=useState([]);
      const [category,setCategory]=useState([]);
     const getAllCategory=async()=>{
        try {
            const response=await fetch(`${API_URL}/getallcategory`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const json=await response.json();
            setCategory(json.categories);
        } catch (error) {
            console.log(error);
        }
      }
     const fetchRandomFoods = async () => {
    try {
      // backend endpoint that returns random items
      const response = await fetch(`${API_URL}/foods-items-random`,{
        method:"GET",
        headers:{
             "Content-Type": "application/json",
        },
      });
      const res_data=await response.json();
     if(response.ok){
        setOurMenu(res_data);
     }
    } catch (err) {
      console.error("Error fetching foods:", err);
    } 
  };
    useEffect(() => {
    fetchRandomFoods();
    getAllCategory();
  }, []);
 const filteredMenu = ourmenu.filter(
  (val) => val?.price > 0 && val?.category
);
  return (
    <div className="bg-[#fdfdfb] flex flex-col gap-9 py-10">
      {/* Header Section */}
      <div className="flex container flex-col gap-3">
         <div className="flex mx-auto text-white flex-wrap gap-4">
                  {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  b  bg-[url(/button-pattern-green.png)]">SHARING BOXES & COOKED RANGE</button>*/}
                 {
                    category.map((cat,index)=>(
                      <Link key={index} data-aos="zoom-in" to={`/product/${cat.categoryname}`} className="flex w-full uppercase cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2  bg  bg-[url(/button-pattern-orange.png)]">{cat.categoryname}</Link>
                    ))
                 }
                  {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-pink.png)]">Milk Shakes</button> */}
                  {/* <button className="flex w-full cursor-pointer md:w-[150px] hover:animate-scl h-auto  sm:h-[100px]  md:h-[150px] items-center justify-center text-base  md:text-lg font-dancing font-bold bg-cover bg-no-repeat border-[3px] border-yellow rounded-md p-2    bg-[url(/button-pattern-yellow.png)]">EVENTS & CATERING</button>  */}
                </div>
        <h2 className="text-3xl font-bold text-charkol capitalize">
          Our Menu
        </h2>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {filteredMenu.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center"
          >
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
    </div>
  )
}

export default OurMenu
