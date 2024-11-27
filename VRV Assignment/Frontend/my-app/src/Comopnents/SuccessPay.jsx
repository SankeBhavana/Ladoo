import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations
import '../CSS/SuccessPay.css'; // Custom CSS for styling

const SuccessPay = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  // Simulating the success message display
  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1500); // Show message after 1.5 seconds
  }, []);

  // Navigate to another page after a few seconds
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        navigate('/'); // Redirect to home after 4 seconds
      }, 4000);
    }
  }, [showMessage, navigate]);

  return (
    <div className="success-container">
      <motion.div
        className="animation-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Cute Success Animation or Icon */}
        <div className="success-icon">🎉</div>
      </motion.div>

      {showMessage && (
        <motion.div
          className="success-message"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Yay! Your order has been placed successfully!</h2>
          <p>Thank you for your purchase. We will notify you once it's on the way! 🚚</p>
        </motion.div>
      )}

      {/* Confetti Animation (optional) */}
      <div className="confetti">
        {/* You can use a confetti library or create custom animations */}
      </div>
    </div>
  );
};

export default SuccessPay;
