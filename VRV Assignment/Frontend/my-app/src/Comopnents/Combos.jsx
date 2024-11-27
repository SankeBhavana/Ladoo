import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Combos.css';  // Importing the custom CSS for styling

// Sample combo data
const comboData = [
  {
    id: 1,
    name: "Classic Ladoo Combo",
    description: "A delicious combo of traditional ladoos.",
    price: 199,
    image: "https://via.placeholder.com/200", // Placeholder image
  },
  {
    id: 2,
    name: "Kesar Ladoo Combo",
    description: "Rich in flavor with saffron, perfect for special occasions.",
    price: 299,
    image: "https://via.placeholder.com/200", // Placeholder image
  },
  {
    id: 3,
    name: "Chocolate Ladoo Combo",
    description: "A sweet fusion of ladoos and chocolate.",
    price: 249,
    image: "https://via.placeholder.com/200", // Placeholder image
  },
  {
    id: 4,
    name: "Mixed Ladoo Combo",
    description: "A perfect combination of different ladoos for variety.",
    price: 349,
    image: "https://via.placeholder.com/200", // Placeholder image
  }
];

const Combos = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (combo) => {
    setCart([...cart, combo]);
    alert(`${combo.name} has been added to your cart!`);
  };

  const handleViewCart = () => {
    navigate('/cart', { state: { cart } });
  };

  return (
    <div className="combos-container">
      <h2>Our Delicious Combos</h2>
      <div className="combos-list">
        {comboData.map((combo) => (
          <div key={combo.id} className="combo-card">
            <img src={combo.image} alt={combo.name} className="combo-image" />
            <h3 className="combo-name">{combo.name}</h3>
            <p className="combo-description">{combo.description}</p>
            <p className="price">₹{combo.price}</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(combo)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="view-cart" onClick={handleViewCart}>View Cart</button>
    </div>
  );
};

export default Combos;
