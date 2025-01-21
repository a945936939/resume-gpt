import React from "react";
import { motion } from "framer-motion";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message, isUser }) => {
  const messageVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      className={`flex items-start gap-3 p-4 rounded-lg mb-4 max-w-[80%] 
        ${isUser ? "ml-auto bg-primary-light" : "mr-auto bg-accent-dark"}
        hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300`}
    >
      <motion.div className="flex-shrink-0" variants={iconVariants}>
        {isUser ? (
          <UserIcon className="h-6 w-6 text-accent" />
        ) : (
          <ComputerDesktopIcon className="h-6 w-6 text-accent-light" />
        )}
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="text-sm md:text-base text-gray-100 prose prose-invert max-w-none">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatMessage;
