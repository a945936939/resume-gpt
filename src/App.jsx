import React from "react";
import { motion } from "framer-motion";
import Chat from "./components/Chat";
import { themeConfig } from "./config/theme";
import { resumeData } from "./config/resume";

function App() {
  const headerAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: themeConfig.animation.duration },
  };

  const mainAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: themeConfig.animation.duration,
      delay: themeConfig.animation.duration * 1.2,
      type: "spring",
      stiffness: themeConfig.animation.stiffness,
      damping: themeConfig.animation.damping,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-dark via-primary to-primary-light overflow-hidden">
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
              delay: themeConfig.animation.duration * 0.4,
            }}
          >
            {themeConfig.chatbot.name}
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg"
            {...headerAnimation}
            transition={{
              ...headerAnimation.transition,
              delay: themeConfig.animation.duration * 0.8,
            }}
          >
            {themeConfig.chatbot.description}
          </motion.p>
        </motion.header>

        <motion.main className="relative" {...mainAnimation}>
          <Chat
            resumeData={resumeData}
            theme={themeConfig}
            config={themeConfig.chatbot}
          />
        </motion.main>
      </div>
    </div>
  );
}

export default App;
