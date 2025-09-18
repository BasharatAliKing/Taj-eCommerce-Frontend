import { img } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const Gallery = () => {
    const [item,setItems]=useState([]);
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
      setItems(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
getallgalleryImages();
  },[]);
  return (
    <div className="bg-[#fdfdfb] flex flex-col gap-9 py-10">
      {/* Header Section */}
      <div className="flex container flex-col gap-3">
        <h2 className="text-3xl font-bold text-charkol capitalize">
          Our Gallery
        </h2>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-6 py-12 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
       {
        item.map((val,index)=>(
            <div key={index}>
                <img src={`${API_URL}/${val.image}`} className='h-40 sm:h-50 md:h-70 w-full' />
            </div>
        ))
       }
      </div>
    </div>
  )
}

export default Gallery
