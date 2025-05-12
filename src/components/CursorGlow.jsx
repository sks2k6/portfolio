
import React from "react";
import { motion } from "framer-motion";

const CursorGlow = ({ mousePosition }) => {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-200 cursor-glow"
      style={{
        "--x": `${mousePosition.x}px`,
        "--y": `${mousePosition.y}px`,
      }}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default CursorGlow;
