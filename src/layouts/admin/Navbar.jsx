import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ title }) => {
  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-row items-center'>
        <Link to="/admin" className='cursor-pointer'><img className='w-[5%] rounded-full' src="/logo.png" alt="" /></Link>
        <img src="/admin/profile.jpg" className='h-10 w-10 ml-auto rounded-full' alt="my-img" />
      </div>
    </header>
  )
}
export default Navbar
