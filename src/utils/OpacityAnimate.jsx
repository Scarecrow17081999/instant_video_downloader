import React from "react";
import { motion } from "framer-motion";
const OpacityAnimate = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default OpacityAnimate;
