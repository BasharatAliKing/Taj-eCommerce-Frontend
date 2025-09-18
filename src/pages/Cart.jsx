import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../useContext/UserContext"; // adjust path if needed
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const CartPage = () => {
  const { cart, setCart, total } = useContext(UserContext);

  // Update cart and sync LS
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Increase qty
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  // Decrease qty
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  // Remove item
  const handleRemove = (id) => {
    const updated = cart.filter((item) => item._id !== id);
    updateCart(updated);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">🛒 My Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty!</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={`${API_URL}/${item.imageUrl}`}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl border"
                    />
                    <div>
                      <h2 className="text-xl font-sketch font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-500">
                        {item.quantity} × £ {item.price}
                      </p>
                      <p className="font-bold text-orange-600">
                        £ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200"
                      >
                        −
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-sm text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-lg rounded-2xl p-6 h-fit flex flex-col gap-2">
              <h2 className="text-2xl font-bold  mb-4 text-gray-800">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>£ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="text-orange-600">£ {total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="text-center w-full bg-charkol cursor-pointer hover:bg-[#6e6e6e] text-white py-3 rounded-xl transition shadow-md"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/"
                className=" w-full border text-center border-gray-400 text-gray-700 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
