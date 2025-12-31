import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

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
    <section className="py-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl md:text-4xl font-bold text-yellow mb-10">
          Best Sellers
        </h3>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full "
        >
          {filteredMenu.map((item, i) => (
            <SwiperSlide key={i} className="flex">
              {/* Card */}
              <Link to={`/product-details/${item._id}`} className="w-full flex flex-col bg-white rounded-xl p-6 shadow-[0_0_15px_yellow] hover:shadow-[0_0_25px_yellow] transition-all duration-300">
                {/* Image */}
                <img
                  src={`${API_URL}/${item.imageUrl}`}
                  alt={item.name}
                  className="mx-auto mb-4 h-40 object-contain"
                />

                {/* Title */}
                <h4 className="font-semibold text-xl md:text-2xl">
                  {item.name}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {item.description?.split(" ").slice(0, 20).join(" ")}...
                </p>

                {/* Price */}
                <p className="text-yellow font-bold mt-3">
                  £{item.price}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
