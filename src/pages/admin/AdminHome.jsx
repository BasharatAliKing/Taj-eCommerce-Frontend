import React from 'react'
import Navbar from '../../layouts/admin/Navbar'
import { Grid, Utensils, Image, ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';
const AdminHome = () => {
  return (
     <div className='flex-1 overflow-auto relative z-10'>
      <Navbar title='Admin Home' />
      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'> 
      
        {/* Categories */}
        <Link to="/admin/categories"
          className="flex items-center gap-3 p-4 rounded-2xl border bg-amber-50 border-amber-200 hover:scale-[1.02] transition-transform shadow-sm"
        >
          <Grid className="w-6 h-6 text-amber-600" />
          <span className="text-gray-900 font-medium">Categories</span>
        </Link>

        {/* Food Items */}
        <Link
        to="/admin/foodItems"
          className="flex items-center gap-3 p-4 rounded-2xl border bg-emerald-50 border-emerald-200 hover:scale-[1.02] transition-transform shadow-sm"
        >
          <Utensils className="w-6 h-6 text-emerald-600" />
          <span className="text-gray-900 font-medium">Food Items</span>
        </Link>

        {/* Gallery */}
        <Link
        to="/admin/gallery"
          className="flex items-center gap-3 p-4 rounded-2xl border bg-sky-50 border-sky-200 hover:scale-[1.02] transition-transform shadow-sm"
        >
          <Image className="w-6 h-6 text-sky-600" />
          <span className="text-gray-900 font-medium">Gallery</span>
        </Link>
        {/* Orders */}
        <Link
        to="/admin/orders"
          className="flex items-center gap-3 p-4 rounded-2xl border bg-rose-50 border-rose-200 hover:scale-[1.02] transition-transform shadow-sm"
        >
          <ShoppingCart className="w-6 h-6 text-rose-600" />
          <span className="text-gray-900 font-medium">Orders</span>
        </Link>
      </div>
    </div>
  )
}

export default AdminHome
