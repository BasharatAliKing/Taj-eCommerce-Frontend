import React from "react";

const ItemCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4">
      <img
        src={`http://168.231.116.183:3000/${image}`}
        alt={name}
        className="w-full h-56 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-3">£{price}</p>
      <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors px-6 py-2 rounded-full font-medium text-white">
        Buy now
      </button>
    </div>
  );
};

export default ItemCard;
