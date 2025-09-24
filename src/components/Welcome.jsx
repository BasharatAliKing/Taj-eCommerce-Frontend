import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
      <div id='about-us' className="flex bg-[#4A4A4A]  py-16 lg:pb-50">
        <div data-aos="fade-right" className="container flex flex-col md:flex-row">
          <img src="/from-kitchen.png" className="w-full md:w-[40%]" alt="" />
         <Link to='/our-menu' className='w-full m-auto'> <img src="/baguette.png" alt="my-img" className='w-full md:w-[50%] mx-auto' /></Link>
        </div>
      </div>
      {/* yellow line image */}
      <div className="absolute z-10 hidden md:flex lg:-mt-40 mx-auto w-full">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1200 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f0d200">
            <polygon points="0,0 60,0 100,100 40,100" />
            <polygon points="120,0 180,0 220,100 160,100" />
            <polygon points="240,0 300,0 340,100 280,100" />
            <polygon points="360,0 420,0 460,100 400,100" />
            <polygon points="480,0 540,0 580,100 520,100" />
            <polygon points="600,0 660,0 700,100 640,100" />
            <polygon points="720,0 780,0 820,100 760,100" />
            <polygon points="840,0 900,0 940,100 880,100" />
            <polygon points="960,0 1020,0 1060,100 1000,100" />
            <polygon points="1080,0 1140,0 1180,100 1120,100" />
          </g>
        </svg>
      </div>
    </>
  )
}

export default Welcome
