import React, { useState } from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    // 👉 your API call to place order goes here
    // await fetch("/api/order", {method: "POST", body: ...})
    // After success:
    setOrderPlaced(true);
  };

  return (
    <div className="py-20 mx-auto flex flex-col gap-5 text-center">
      <p className="text-xl font-sketch text-charkol md:w-[60%] mx-auto font-semibold">
        “Thank you for your order! 🍴 Your delicious meal is being prepared with
        love and care. Sit back, relax, and we’ll have your food delivered hot
        and fresh to your doorstep soon. We truly appreciate your trust and
        can’t wait for you to enjoy your meal! ✨ Please also check your email
        for the order confirmation details.”
      </p>
      <Link
        to="/"
        className="px-4 font-medium font-sketch py-2 mx-auto bg-yellow text-black rounded-lg"
      >
        Back to Store
      </Link>
    </div>
  );
};

export default OrderConfirmation;
