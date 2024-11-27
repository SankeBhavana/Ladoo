import React, { useState } from "react";
import "../CSS/Customize.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Ladoo from "./Ladoo"; // Import the Ladoo animation component

// Sample data for ingredients
const baseIngredients = [
  { id: 1, name: "Dates", price: 30, image: "/images/dates.png", nutrition: "Calories: 200 | Protein: 2g | Fat: 0g" },
  { id: 2, name: "Ghee", price: 50, image: "/images/ghee.png", nutrition: "Calories: 900 | Protein: 0g | Fat: 100g" },
];
const optionalIngredient = { id: 11, name: "Cardamom", price: 10, image: "/images/cardamom.png", nutrition: "Calories: 20 | Protein: 1g | Fat: 0g" };
const dryFruits = [
  { id: 3, name: "Almonds", price: 40, image: "/images/almonds.png", nutrition: "Calories: 160 | Protein: 6g | Fat: 14g" },
  { id: 4, name: "Cashews", price: 60, image: "/images/cashews.png", nutrition: "Calories: 160 | Protein: 5g | Fat: 14g" },
  { id: 5, name: "Pistachios", price: 70, image: "/images/pistachios.png", nutrition: "Calories: 180 | Protein: 6g | Fat: 15g" },
  { id: 6, name: "Raisins", price: 60, image: "/images/raisins.png", nutrition: "Calories: 290 | Protein: 3g | Fat: 0g" },
  { id: 13, name: "Fig", price: 40, image: "/images/almonds.png", nutrition: "Calories: 160 | Protein: 6g | Fat: 14g" },
  { id: 14, name: "Walnuts", price: 40, image: "/images/almonds.png", nutrition: "Calories: 160 | Protein: 6g | Fat: 14g" },
];
const seeds = [
  { id: 7, name: "Pumpkin seeds", price: 20, image: "/images/pumpkin-seeds.png", nutrition: "Calories: 150 | Protein: 8g | Fat: 12g" },
  { id: 8, name: "Watermelon seeds", price: 25, image: "/images/watermelon-seeds.png", nutrition: "Calories: 130 | Protein: 5g | Fat: 7g" },
  { id: 10, name: "Sunflower seeds", price: 95, image: "/images/watermelon-seeds.png", nutrition: "Calories: 130 | Protein: 5g | Fat: 7g" },
  { id: 12, name: "Sesame seeds", price: 50, image: "/images/watermelon-seeds.png", nutrition: "Calories: 130 | Protein: 5g | Fat: 7g" },
  { id: 15, name: "Poppy seeds", price: 25, image: "/images/watermelon-seeds.png", nutrition: "Calories: 130 | Protein: 5g | Fat: 7g" },
];

const Customize = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [includeCardamom, setIncludeCardamom] = useState(false);
  const [showLadoo, setShowLadoo] = useState(false); // State for Ladoo animation
  const navigate = useNavigate();

  const handleSelect = (ingredient) => {
    if (selectedIngredients.some((item) => item.id === ingredient.id)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item.id !== ingredient.id));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const calculateTotal = () => {
    const allIngredients = [
      ...baseIngredients,
      ...selectedIngredients,
      ...(includeCardamom ? [optionalIngredient] : []),
    ];
    return allIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
  };

  const handleAddToCart = () => {
    if (selectedIngredients.length === 0 && !includeCardamom) {
      alert("Please select at least one additional ingredient.");
      return;
    }

    // Show Ladoo animation
    setShowLadoo(true);

    // Redirect to cart after animation ends
    setTimeout(() => {
      navigate("/cart");
    }, 3000); // Adjust duration based on the animation
  };

  return (
    <div className="bg-gradient-custom min-h-screen py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Show Ladoo animation when active */}
        {showLadoo && <Ladoo />}

        {!showLadoo && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Customize Your Ladoo</h1>

            {/* Optional Ingredient */}
            <div className="flex items-center mb-8">
              <input
                type="checkbox"
                id="cardamom"
                checked={includeCardamom}
                onChange={() => setIncludeCardamom(!includeCardamom)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="cardamom" className="ml-2 text-gray-700 text-lg">
                Add Cardamom (₹{optionalIngredient.price})
              </label>
            </div>

            {/* Ingredient Categories */}
            <div className="ingredient-section flex gap-8">
              {/* Dry Fruits */}
              <div className="ingredient-category">
                <h2 className="ingredient-category-title">Dry Fruits</h2>
                <div className="ingredient-cards">
                  {dryFruits.map((ingredient) => (
                    <motion.div
                      key={ingredient.id}
                      onClick={() => handleSelect(ingredient)}
                      className={`ingredient-card ${
                        selectedIngredients.some((item) => item.id === ingredient.id) ? "selected" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${ingredient.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="ingredient-hover-info">
                        <p>{ingredient.nutrition}</p>
                      </div>
                      <h3 className="ingredient-name">{ingredient.name}</h3>
                      <p className="ingredient-price">₹{ingredient.price}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

            {/* Seeds */}
<div className="ingredient-category">
  <h2 className="ingredient-category-title">Seeds</h2>
  <div className="ingredient-cards">
    {seeds.map((ingredient) => (
      <motion.div
        key={ingredient.id}
        onClick={() => handleSelect(ingredient)}
        className={`ingredient-card ${
          selectedIngredients.some((item) => item.id === ingredient.id) ? "selected" : ""
        }`}
        style={{
          backgroundImage: `url(${ingredient.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ingredient-hover-info">
          <p>{ingredient.nutrition}</p>
        </div>
        <h3 className="ingredient-name">{ingredient.name}</h3>
        <p className="ingredient-price">₹{ingredient.price}</p>
      </motion.div>
    ))}
  </div>
</div>

            </div>

            {/* Summary and Add to Cart */}
            <div className="summary-container">
              <h2 className="summary-title">Selected Ingredients</h2>
              <ul className="summary-list">
                {selectedIngredients.length > 0 || includeCardamom ? (
                  <>
                    {selectedIngredients.map((ingredient) => (
                      <li key={ingredient.id} className="summary-item">
                        {ingredient.name} - ₹{ingredient.price}
                      </li>
                    ))}
                    {includeCardamom && (
                      <li className="summary-item">
                        {optionalIngredient.name} - ₹{optionalIngredient.price}
                      </li>
                    )}
                  </>
                ) : (
                  <p className="text-gray-600">No additional ingredients selected.</p>
                )}
              </ul>
              <p className="total-price">Total: ₹{calculateTotal()}</p>
              <motion.button
                onClick={handleAddToCart}
                className="add-to-cart-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Customize;
