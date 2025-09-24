import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../useContext/UserContext";
import { toast } from "react-toastify";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const ProductDetails = () => {
  const params = useParams();
  const { setCart } = useContext(UserContext);
  const [loading, setLoading] = useState(true); // ✅ Add loading state
  const [item, setItem] = useState(null);
  const [allItems, setAllItems] = useState([]); // ✅ store all food items
  const [quantity, setQuantity] = useState(1);
  const [showExtras, setShowExtras] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // ✅ Fetch single product
  const getFoodItem = async () => {
    try {
      const response = await fetch(
        `${API_URL}/getfooditembyid/${params.id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      setItem(json.foodItem);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false); // ✅ Stop loading after API call finishes
    }
  };

  // ✅ Fetch all food items (to resolve suggestion IDs)
  const getAllFoodItems = async () => {
    try {
      const response = await fetch(`${API_URL}/getallfooditems`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setAllItems(json.message || []);
    } catch (error) {
      console.log(error);
    }
  };
  // ✅ Add main item to cart
  const handleAddtoCart = (e) => {
    e.preventDefault();
    toast.success("Item added to Cart!");
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (!Array.isArray(cart)) cart = [];
    } catch (err) {
      cart = [];
    }

    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);

    // 👉 open popup if suggestions exist
    if (item.suggestions && item.suggestions.length > 0) {
      setShowExtras(true);
    }
  };

  // ✅ Add selected extras
  const handleAddExtras = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    selectedExtras.forEach((extra) => {
      const exists = cart.find((x) => x._id === extra._id);
      if (!exists) {
        cart.push({ ...extra, quantity: 1 });
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);

    toast.success("Extras added to cart!");
    setShowExtras(false);
    setSelectedExtras([]);
  };

  // ✅ Toggle selection
  const toggleExtra = (extra) => {
    if (selectedExtras.find((x) => x._id === extra._id)) {
      setSelectedExtras(selectedExtras.filter((x) => x._id !== extra._id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  // Quantity control
  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    getFoodItem();
    getAllFoodItems();
  }, []);

  if (!item) return <div className="p-6">Loading...</div>;

// ✅ Get matched suggestions from allItems
const suggestedItems = allItems.filter((food) =>
  item.suggestions.includes(food._id)
);
 if (loading) {
    // ✅ Loading screen
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          src="/logo.png"  // 👉 put your logo path here (public folder in Vite)
          alt="Loading..."
          className="w-24 h-24 animate-spin"
        />
      </div>
    );
  }
  return (
    <div className="font-sans py-16 pt-5">
      {/* Breadcrumb */}
      <div className="px-8 py-10 text-xl font-medium text-gray-600 capitalize">
        <Link to="/our-menu">Home</Link> / <Link to={`/product/${item.category}`}>{item.category}</Link> / <span className="font-semibold">{item.name}</span>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 px-8">
        {/* Product Image */}
        <div className="relative">
         {item.size ?    <p className="absolute capitalize top-5 right-5 z-50 bg-yellow px-3 py-2 rounded-md text-charkol font-semibold">{item.size}</p>:null}
          <img
            src={`${API_URL}/${item.imageUrl}`}
            alt={item.name}
            className="rounded-lg shadow-md w-full max-h-[400px] object-cover"
          />
        </div>
        {/* Product Info */}
        <div className="flex flex-col gap-6 my-auto">
          <h2 className="text-3xl font-bold">{item.name}</h2>
          <p className="text-green-600 font-semibold">{item.description}</p>
          <div className="text-2xl font-bold">£{item.price}</div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 border rounded-full text-xl"
            >
              −
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 border rounded-full text-xl"
            >
              +
            </button>
            <Link
              onClick={handleAddtoCart}
              className="bg-black cursor-pointer text-white hover:bg-yellow hover:text-black font-medium px-6 py-2 rounded-full ml-4"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
      {/* ✅ Popup Modal for Extras */}
      {showExtras && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">
              Would you like to add extras?
            </h2>
            <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
              {suggestedItems.map((extra) => (
                <div
                  key={extra._id}
                  className="flex items-center gap-3 border-b pb-2"
                >
                  <input
                    type="checkbox"
                    checked={!!selectedExtras.find((x) => x._id === extra._id)}
                    onChange={() => toggleExtra(extra)}
                  />
                  <img
                    src={`${API_URL}/${extra.imageUrl}`}
                    alt={extra.name}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{extra.name}</p>
                    <p className="text-sm text-gray-600">£{extra.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setShowExtras(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Skip
              </button>
              <button
                onClick={handleAddExtras}
                className="px-4 py-2 bg-yellow-400 rounded"
              >
                Add Selected
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
