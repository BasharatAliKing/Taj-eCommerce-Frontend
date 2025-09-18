import React from 'react'

const Fusion = () => {
  return (
     <div className="relative -mt-15 py-30 md:py-16  bg-cover bg-center bg-[url(/parallel--yellow-green--large.png)]">
        <img
          src="/stars.svg"
          className="absolute right-10 md:right-20 top-0 w-[20%] md:w-[7%]"
          alt=""
        />
        <div className="container flex">
          <img src="/a-fusion-of-all.png" alt="" />
          <img
            src="/baguette.png"
            className="absolute -bottom-15  md:-bottom-10 right-10 w-[50%] md:right-20 md:w-[20%]"
            alt=""
          />
        </div>
      </div>
  )
}

export default Fusion
