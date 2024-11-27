import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../CSS/Ladoo.css";

const Ladoo = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (animationStarted) {
      setTimeout(() => {
        setIsComplete(true);
      }, 1500); // Simulate ladoo preparation animation
    }
  }, [animationStarted]);

  return (
    <div className="ladoo-container">
      <motion.div
        className="ladoo-animation"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        onAnimationComplete={() => setAnimationStarted(true)}
      >
        <div className="ladoo-base">
          {animationStarted && (
            <motion.div
              className="ladoo-ingredients"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.2 }}
            >
              <span className="ingredient almond">🌰</span>
              <span className="ingredient cashew">🥜</span>
              <span className="ingredient raisin">🍇</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {isComplete && (
        <motion.div
          className="ladoo-success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Ladoo Ready! 🎉</h2>
          <p>Your customized ladoo is complete and ready to enjoy!</p>
        </motion.div>
      )}

      <div className="confetti"></div>
    </div>
  );
};

export default Ladoo;
