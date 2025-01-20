import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_THEME, DEFAULT_CHATBOT_CONFIG } from "../config/constants";
import Chat from "./Chat";
import { motion } from "framer-motion";

const ResumeGPT = ({
  resumeData,
  theme = DEFAULT_THEME,
  config = DEFAULT_CHATBOT_CONFIG,
  className = "",
}) => {
  const headerAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: theme.animation.duration },
  };

  const mainAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: theme.animation.duration,
      delay: theme.animation.duration * 1.2,
      type: "spring",
      stiffness: theme.animation.stiffness,
      damping: theme.animation.damping,
    },
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden ${className}`}
      style={{
        "--primary-color": theme.colors.primary.default,
        "--primary-light": theme.colors.primary.light,
        "--primary-dark": theme.colors.primary.dark,
        "--accent-color": theme.colors.accent.default,
        "--accent-light": theme.colors.accent.light,
        "--accent-dark": theme.colors.accent.dark,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <motion.div
            className="absolute inset-0 bg-accent/30 blur-3xl rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: "20%",
              left: "25%",
              width: "50%",
              height: "50%",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-primary-light/20 blur-3xl rounded-full"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              top: "40%",
              right: "20%",
              width: "40%",
              height: "40%",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative">
        <motion.header className="text-center mb-8" {...headerAnimation}>
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-accent mb-2 tracking-tight"
            {...headerAnimation}
            transition={{
              ...headerAnimation.transition,
              delay: theme.animation.duration * 0.4,
            }}
          >
            {config.name}
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
            {...headerAnimation}
            transition={{
              ...headerAnimation.transition,
              delay: theme.animation.duration * 0.8,
            }}
          >
            {config.description}
          </motion.p>
        </motion.header>

        <motion.main className="relative" {...mainAnimation}>
          <Chat resumeData={resumeData} theme={theme} config={config} />
        </motion.main>
      </div>
    </div>
  );
};

ResumeGPT.propTypes = {
  resumeData: PropTypes.object.isRequired,
  theme: PropTypes.object,
  config: PropTypes.object,
  className: PropTypes.string,
};

export default ResumeGPT;
