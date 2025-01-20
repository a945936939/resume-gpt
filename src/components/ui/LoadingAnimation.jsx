import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const circleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  };

  return (
    <motion.div
      className="flex items-center gap-2 p-4 rounded-lg bg-accent-dark/50 backdrop-blur-sm"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          className="w-3 h-3 bg-accent rounded-full"
          variants={circleVariants}
          transition={{
            ...circleTransition,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default LoadingAnimation;
