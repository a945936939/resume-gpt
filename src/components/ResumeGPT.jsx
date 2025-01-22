import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Chat from "./Chat";
const ResumeGPT = ({
  resumeData,
  theme,
  config,
  className = "",
  apiKey,
  baseURL,
  model,
  temperature,
  maxTokens,
  height = "800px",
  width = "800px",
}) => {
  // Ensure minimum dimensions of 500px
  const finalHeight = height.replace("px", "") < 500 ? "500px" : height;
  const finalWidth = width.replace("px", "") < 500 ? "500px" : width;

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
      className={`mx-auto overflow-hidden rounded-lg shadow-xl relative ${className}`}
      style={{
        height: finalHeight,
        width: finalWidth,
        backgroundColor: theme.colors.background.main,
      }}
    >
      <div className="h-full w-full px-4 py-8 relative overflow-y-auto">
        <motion.header className="text-center mb-8" {...headerAnimation}>
          <motion.h1
            className="text-3xl md:text-4xl font-bol d mb-2 tracking-tight"
            style={{ color: theme.colors.ui.title }}
            {...headerAnimation}
            transition={{
              ...headerAnimation.transition,
              delay: theme.animation.duration * 0.4,
            }}
          >
            {config.name}
          </motion.h1>
          <motion.p
            style={{ color: theme.colors.ui.description }}
            className="text-lg"
            {...headerAnimation}
            transition={{
              ...headerAnimation.transition,
              delay: theme.animation.duration * 0.8,
            }}
          >
            {config.description}
          </motion.p>
        </motion.header>

        <motion.main
          className="relative h-[calc(100%-8rem)]"
          {...mainAnimation}
        >
          <Chat
            resumeData={resumeData}
            theme={theme}
            config={config}
            apiKey={apiKey}
            baseURL={baseURL}
            model={model}
            temperature={temperature}
            maxTokens={maxTokens}
          />
        </motion.main>
      </div>
    </div>
  );
};

ResumeGPT.propTypes = {
  resumeData: PropTypes.object,
  theme: PropTypes.object,
  config: PropTypes.object,
  className: PropTypes.string,
  apiKey: PropTypes.string,
  baseURL: PropTypes.string,
  model: PropTypes.string,
  temperature: PropTypes.number,
  maxTokens: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ResumeGPT;
