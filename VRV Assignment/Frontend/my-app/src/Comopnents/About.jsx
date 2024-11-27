import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to navigate to the Customize page
  const handleStartCustomizing = () => {
    navigate("/customize");  // Navigates to the Customize page
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-bold text-yellow-600">Ladoo</span>, where tradition meets personalization! We believe that sweet moments are best shared, and what better way to celebrate than with ladoos crafted just the way you like them? 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our platform allows you to create your own unique ladoos by selecting from a wide variety of fresh ingredients. Whether it's the goodness of dry fruits, the health benefits of seeds, or the aromatic touch of cardamom, the choice is yours. We ensure that each ladoo is made with love and the finest ingredients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl font-bold text-yellow-600">🍯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quality Ingredients</h3>
              <p className="text-gray-600 mt-2">
                Only the freshest and finest ingredients make it into your ladoos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl font-bold text-yellow-600">🧑‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Customizable Recipes</h3>
              <p className="text-gray-600 mt-2">
                Choose from a wide range of dry fruits, seeds, and optional flavors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100">
                <span className="text-2xl font-bold text-yellow-600">💌</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Made with Love</h3>
              <p className="text-gray-600 mt-2">
                Every ladoo is handcrafted to bring joy to your taste buds.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            At <span className="font-bold text-yellow-600">Ladoo</span>, we cherish the art of ladoo-making and invite you to be part of the creative process. Whether you're treating yourself, gifting a loved one, or celebrating a special occasion, we are here to make it unforgettable.
          </p>
          <p className="text-center mt-8">
            <button
              onClick={handleStartCustomizing}  // Handle click event
              className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition"
            >
              Start Customizing
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
