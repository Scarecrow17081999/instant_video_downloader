import React from "react";
import { useScroll, useSpring, motion } from "framer-motion";
const ScrollXAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="progress-bar"
      style={{
        scaleX: scaleX,
        position: "fixed",
        top: "54px",
        left: 0,
        right: 0,
        border: "1px solid skyBlue",
        filter: "blur(calc(6))",
        zIndex: "9999",
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollXAnimation;
