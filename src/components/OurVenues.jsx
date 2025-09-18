import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const venues=[
  {
    id:1,
    img1:'/venue-icon--Flag.png',
    heading1:'K2 Taj',
    heading2:'Our first venue!',
    openingtime:'Monday - Thursday : 12pm-11pm',
    openingfritime:'Friday : 12pm-12am',
    openingsattime:'Saturday : 1pm-1am',
    openingsuntime:'Saturday : 1pm-1am',
    contactdetail:'51-53 Plane street BlackBurn, ',
     contactdetailtwo:'BB1 6LR',
    contactdetailthree:'07404 888956',
    contactdetailfour:'01254 675899',
    maincolor:'#4A4A4A',
    bordercolor:'#3c3437',
  }
]
const OurVenues = () => {
   
  return (
   <div id='where-to-find-us' className="relative bg-cover bg-center bg-[url(/wheretofindus.jpg)]">
      <div className="flex flex-col gap-20 bg-[#221b4b80]  py-30">
         <img src="/our-venues-far-and-wide.png" className='mx-auto mt-10 w-[30%]' alt="" />
    <div className=" max-w-[800px] mx-auto">
      
      {
        venues.map((val,index)=>(
          <div className="mt-15  max-w-[800px] bg-[#121212] mx-auto">
             <div key={index} className="relative z-10 p-10 border-[25px] h-[515px] w-[800px]" style={{ borderColor: val.bordercolor, backgroundColor: val.maincolor }}>
           <div className="flex items-center justify-center -top-20  left-73 z-50 absolute  h-[150px] w-[150px] p-5 rounded-full" style={{backgroundColor: val.bordercolor}}>
          <img src={val.img1}  alt="" />
           </div>
           <>
            {/* left-images */}
            <img src="/dot--vertical.png" className='absolute -top-4 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-6 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-16 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-26 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-36 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-46 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-56 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-66 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-76 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-86 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-96 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-107 -left-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-118 -left-4' alt="" />
            {/* Right-images */}
            <img src="/dot--vertical.png" className='absolute -top-4 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-6 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-16 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-26 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-36 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-46 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-56 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-66 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-76 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-86 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-96 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-107 -right-4' alt="" />
            <img src="/dot--vertical.png" className='absolute top-118 -right-4' alt="" />
            {/* bottom Images */}
              <img src="/dot--vertical.png" className='absolute top-118 left-6' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-16' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-26' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-36' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-46' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-56' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-66' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-76' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-86' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-96' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-106' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-116' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-126' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-136' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-146' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-156' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-167' alt="" />
              <img src="/dot--vertical.png" className='absolute top-118 left-178' alt="" />
            {/* top Images */}
              <img src="/dot--vertical.png" className='absolute -top-4 left-6' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-16' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-26' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-36' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-46' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-56' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-66' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-76' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-86' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-96' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-106' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-116' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-126' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-136' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-146' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-156' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-167' alt="" />
              <img src="/dot--vertical.png" className='absolute -top-4 left-178' alt="" />
           </>
         <h1 className='text-6xl text-white mt-10 text-center font-bold font-norican'>{val.heading1}</h1>
           <h1 className='text-3xl text-yellow mt-5 font-bold uppercase text-center font-dancing'>{val.heading2}</h1>
           <div className="flex gap-5 mt-10">
            <div className="w-1/2 text-center">
            <h3 className='text-lg text-yellow font-semibold uppercase'>Opening Times</h3>
            <p className='text-white text-lg font-medium font-sketch'>{val.openingtime}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.openingfritime}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.openingsattime}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.openingsuntime}</p>
            </div>
            <hr className='bg-yellow text-yellow w-[1px] h-[150px]' />
            <div className="w-1/2 text-center">
            <h3 className='text-lg text-yellow font-semibold uppercase'>Contact Details</h3>
            <p className='text-white text-lg font-medium font-sketch'>{val.contactdetail}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.contactdetailtwo}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.contactdetailthree}</p>
            <p className='text-white text-lg font-medium font-sketch'>{val.contactdetailfour}</p>
            </div>
           </div>
         </div>
      </div>
        ))
      }
    </div>
      </div>
    </div>
  )
}

export default OurVenues
