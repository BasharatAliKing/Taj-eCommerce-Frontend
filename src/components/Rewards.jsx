import React from 'react'

const Rewards = () => {
  return (
    <div className="relative  bg-cover bg-center bg-[url(/button-pattern-pink.png)]">
        <div className=" pb-20 md:pb-30 pt-28 inset-0 bg-[#4a4a4a8a] bg-opacity-40 flex flex-col  text-white">
          <div className="container flex flex-col md:flex-row">
            <div className="flex flex-col md:gap-5 md:w-1/2">
              <img src="/logo.png" className="md:w-[30%] mx-auto rounded-full" alt="my-img" />
              <img src="/new-rewards-scheme.png" className="md:w-[80%]" alt="" />
            </div>
            <div className="flex flex-col gap-3 md:gap-5 md:w-1/2 my-auto">
              <p className="text-base text-white font-semibold">
                Save money and enjoy more with MyLahore Rewards – sign up today!
              </p>
              <p className="text-base text-white font-semibold">
                Our huuugely rewarding scheme offers you 10% credit on the value
                of your restaurant order to use on a future date! So every £10
                spent earns you £1 worth of credit! For example, spend £50 and
                get £5 credit to use later!
              </p>
              <p className="text-base text-white font-semibold">
                MyLahore Rewards is available for both dine-in and collection
                orders in all our stores, as well as telephone delivery orders
                at our Bradford Delivery store, though not for online delivery
                orders via UberEats.
              </p>
              <p className="text-base text-white font-semibold underline">
                Terms Apply!
              </p>
              <hr />
              <p className="text-base text-white font-semibold">
                Say hello to our refreshed App! Rewards, perks & the MyLahore
                world at your fingertips.
              </p>
              <div className="flex gap-5">
                <img src="/google-play.png" width="30%" alt="" />
                <img src="/app-store.png" width="30%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Rewards
