import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../CSS/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Dates Ladoo",
      price: 150,
      quantity: 2,
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      id: 2,
      name: "Urad Dal Balls",
      price: 200,
      quantity: 1,
      image: "https://via.placeholder.com/100", // Replace with actual image
    },
  ]);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate('/paymentpage'); // Navigate to the PaymentPage
  };

  return (
    <div className="bg-pink-50 min-h-screen py-12 px-6 lg:px-20">
      <h1 className="text-4xl font-bold text-pink-700 text-center mb-8">
        Your Cart
      </h1>
      {cartItems.length > 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-pink-100 rounded-lg p-4 shadow hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-bold text-pink-700">{item.name}</h2>
                <p className="text-pink-600 mt-2">Price: ₹{item.price}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-3 py-1 bg-pink-700 text-white font-bold rounded-full hover:bg-pink-800 transition"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <span className="text-pink-700 font-bold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="px-3 py-1 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-pink-50 p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-pink-700">
              Total Price: ₹{totalPrice}
            </h3>
            <button
              className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition"
              onClick={handleProceedToCheckout} // Handle button click to navigate to PaymentPage
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">
            Your cart is empty!
          </h2>
          <p className="text-pink-600 mb-6">
            Start adding your favorite ladoos to see them here.
          </p>
          <button className="px-6 py-3 bg-pink-700 text-white font-bold rounded-full hover:bg-pink-800 transition">
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
