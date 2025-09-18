import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../../layouts/admin/Navbar";
const API_URL = import.meta.env.VITE_API_URL;  // ✅ Correct way in Vite
const AdminViewOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch order by ID
  const fetchOrder = async () => {
    try {
      const res = await fetch(`${API_URL}/getOrderById/${id}`);
      const data = await res.json();
      if (res.ok) {
        setOrder(data.order);
      } else {
        toast.error(data.message || "Failed to fetch order");
      }
    } catch (err) {
      toast.error("Error fetching order");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading order...</p>;
  }

  if (!order) {
    return <p className="text-center py-10 text-red-500">Order not found</p>;
  }

  const formattedDate = new Date(order.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex-1 overflow-auto min-h-screen z-10 text-gray-800">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white mb-6">
          📦 Order Details
        </h1>

        {/* Order Info */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border text-white border-gray-100">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-1">
              <p className="text-gray-400 text-lg">Order ID</p>
              <p className="font-semibold">{order._id}</p>
            </div>
             <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-1">
              <p className="text-gray-400 text-lg">Customer</p>
              <p className="font-semibold">
                {order.user?.firstName
                  ? `${order.user.firstName} ${order.user.lastName}`
                  : order.user}
              </p>
            </div>
             <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-1">
              <p className="text-gray-400 text-lg">Email</p>
              <p className="font-semibold">
                {order.user?.email || "Not provided"}
              </p>
            </div>
             <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-1">
              <p className="text-gray-400 text-lg">Status</p>
              <span
                className={`px-3 py-1 rounded-full mr-auto text-sm capitalize font-medium ${
                  order.status === "pending"
                    ? "bg-red-500 text-white"
                    : order.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {order.status}
              </span>
            </div>
             <div className="bg-gray-800 rounded-md p-3 flex flex-col gap-1">
              <p className="text-gray-400 text-lg">Placed On</p>
              <p className="font-semibold">{formattedDate}</p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-100">
          <h2 className="text-2xl font-semibold font-sketch mb-4">🛒 Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="border px-4 py-2 text-left">Image</th>
                  <th className="border px-4 py-2 text-left">Item</th>
                  <th className="border px-4 py-2 text-center">Quantity</th>
                  <th className="border px-4 py-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="border px-4 py-2"><img className="h-15 w-15 mx-auto" src={`${API_URL}/${item.imageUrl}`} alt="my-img" /></td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2 text-center">
                      {item.quantity}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      ${item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex justify-between items-center border border-gray-100">
          <span className="text-lg font-semibold">💰 Total Amount:</span>
          <span className="text-2xl font-bold text-green-600">
            ${order.totalAmount}
          </span>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/admin/orders"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            ← Back to Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminViewOrder;
