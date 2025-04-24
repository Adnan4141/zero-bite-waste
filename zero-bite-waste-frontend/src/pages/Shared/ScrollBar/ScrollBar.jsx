{/* 🌿🍋 Scroll Progress Bar with green-yellow gradient */}

import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll(); // ✅ Define scrollYProgress
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
        background: "linear-gradient(to right, #65a30d, #facc15)", // Green to Yellow
      }}
    />
  );
};

export default ScrollBar;
