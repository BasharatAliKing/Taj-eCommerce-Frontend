import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = import.meta.env.VITE_API_URL;

export default function BestSellers() {
  const [ourmenu, setOurMenu] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/foods-items-random`)
      .then((res) => res.json())
      .then((data) => setOurMenu(data))
      .catch(console.error);
  }, []);

  const filteredMenu = ourmenu.filter(
    (item) => item?.price > 0 && item?.category
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl font-extrabold text-yellow mb-12">
          ⭐ Best Sellers ⭐
        </h3>

        {/* Shadow wrapper (Top + Bottom glow for all cards) */}
        <div className="relative">
          <div className="absolute -top-6 left-0 right-0 h-10 bg-yellow/30 blur-2xl" />
          <div className="absolute -bottom-6 left-0 right-0 h-10 bg-yellow/30 blur-2xl" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full relative z-10"
          >
            {filteredMenu.map((item) => (
              <SwiperSlide key={item._id} className="h-auto">
                {/* Card */}
                <Link
                  to={`/product-details/${item._id}`}
                  className="group flex flex-col bg-[#656565] rounded-2xl p-6 max-w-sm mx-auto 
                  transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={`${API_URL}/${item.imageUrl}`}
                      alt={item.name}
                      className="mx-auto h-40 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4 flex flex-col flex-grow">
                    <h4 className="font-bold text-xl md:text-2xl text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-gray-300 mt-2 flex-grow">
                      {item.description?.split(" ").slice(0, 20).join(" ")}...
                    </p>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow to-transparent my-4" />

                    {/* Price */}
                    <p className="text-yellow text-xl font-extrabold">
                      £{item.price}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
