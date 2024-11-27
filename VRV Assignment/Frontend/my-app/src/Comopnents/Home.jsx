import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import datesladoo from '../Asserts/datesladoo.jpg';
import uraddalballs from '../Asserts/uraddalballs.jpg';
import '../CSS/Home.css'; // Import the CSS file for additional styling

export const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleShopNow = () => {
    navigate('/combos'); // Navigate to Combos page
  };

  const handleLearnMore = () => {
    navigate('/about'); // Navigate to About page
  };

  const handleAddToCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  return (
    <div className="home bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-yellow-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-6xl font-extrabold text-yellow-700 leading-tight mb-6">
                Indulge in Sweetness!
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Explore a wide variety of freshly made, delicious ladoos. Perfect for every occasion or as a sweet treat for yourself.
              </p>
              <button
                className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-700 transition"
                onClick={handleShopNow}
              >
                Shop Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                src={uraddalballs}
                alt="Delicious Ladoos"
                className="rounded-lg shadow-lg max-w-full h-auto mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="bg-yellow-600 text-white rounded-lg shadow-lg p-6 lg:p-12 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{color:'orange'}}>
              Freshness Guaranteed
            </h2>
            <p className="text-lg mb-6" >
              Every ladoo is handcrafted with love and made to order to ensure the best quality and taste.
            </p>
            <button
              className="px-6 py-3 bg-white text-yellow-600 font-bold rounded-full hover:bg-gray-200 transition"
              style={{color:'orange'}}
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Our Bestselling Ladoos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single Product Card */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={datesladoo}
                alt="Classic Dates Ladoo"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Classic Dates Ladoo</h3>
                <p className="text-gray-600 mt-2">Made with premium ingredients and pure ghee.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-yellow-700 font-bold text-xl">₹150</span>
                  <button
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={datesladoo}
                alt="Classic Dates Ladoo"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Classic Dates Ladoo</h3>
                <p className="text-gray-600 mt-2">Made with premium ingredients and pure ghee.</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-yellow-700 font-bold text-xl">₹150</span>
                  <button
                    className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Repeat for more products */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-700 italic">
                "The ladoos are so fresh and tasty! Perfect for every celebration."
              </p>
              <h3 className="mt-4 text-lg font-bold text-yellow-600">- Vidhya Sanke.</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-700 italic">
                "The ladoos are so fresh and tasty! Perfect for every celebration."
              </p>
              <h3 className="mt-4 text-lg font-bold text-yellow-600">- Vidhya Sanke.</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-700 italic">
                "The ladoos are so fresh and tasty! Perfect for every celebration."
              </p>
              <h3 className="mt-4 text-lg font-bold text-yellow-600">- Vidhya Sanke.</h3>
            </div>
            
            {/* Repeat for more testimonials */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-yellow-700 text-white py-8">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4"  style={{color:'white'}}>Ladoo - Taste the Tradition</h2>
          <p className="mb-6" style={{color:'white'}}>Bringing happiness to your celebrations since 2024.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Instagram
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
