import React, { useState } from "react";

const Orders = () => {
  // State to manage orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      ingredients: ["Besan", "Ghee", "Sugar", "Almonds"],
      price: 200,
      status: "Delivered",
      placedAt: new Date(Date.now() - 48 * 60 * 60 * 1000), // Example: 2 days ago
    },
    {
      id: 2,
      ingredients: ["Besan", "Cashews", "Pistachios", "Cardamom"],
      price: 250,
      status: "Processing",
      placedAt: new Date(Date.now() - 6 * 60 * 60 * 1000), // Example: 6 hours ago
    },
  ]);

  // Function to check if the order can be canceled (within 24 hours)
  const isCancelable = (placedAt) => {
    const timeDifference = Date.now() - new Date(placedAt).getTime();
    return timeDifference <= 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  };

  // Handle canceling an order
  const handleCancelOrder = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Canceled" } : order
      )
    );
    alert("Your order has been canceled.");
  };

  // Handle re-ordering
  const handleReOrder = (order) => {
    const newOrder = {
      ...order,
      id: Date.now(), // Assign a new ID
      status: "Processing",
      placedAt: new Date(), // Current timestamp
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    alert("Your order has been placed again!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Your Orders
        </h1>

        {orders.length > 0 ? (
          <ul className="space-y-6">
            {orders.map((order) => (
              <li
                key={order.id}
                className="bg-white p-6 rounded-lg shadow-md border"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <p className="text-gray-700 mt-2">
                  <strong>Ingredients:</strong> {order.ingredients.join(", ")}
                </p>
                <p className="text-gray-700 mt-1">
                  <strong>Total Price:</strong> ₹{order.price}
                </p>
                <p className="text-gray-700 mt-1">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "Processing"
                        ? "text-yellow-600"
                        : "text-red-600"
                    } font-semibold`}
                  >
                    {order.status}
                  </span>
                </p>
                <p className="text-gray-700 mt-1">
                  <strong>Placed At:</strong>{" "}
                  {new Date(order.placedAt).toLocaleString()}
                </p>

                <div className="mt-4 flex space-x-4">
                  {isCancelable(order.placedAt) && order.status === "Processing" && (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      Cancel Order
                    </button>
                  )}
                  {order.status === "Delivered" && (
                    <button
                      onClick={() => handleReOrder(order)}
                      className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
                    >
                      Re-Order
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-center">You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
