import React from "react";
import { motion } from "framer-motion";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ message, isUser, theme }) => {
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
        stiffness: theme.animation.stiffness,
        damping: theme.animation.damping,
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
        stiffness: theme.animation.stiffness,
        damping: theme.animation.damping,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={messageVariants}
      style={{
        backgroundColor: isUser
          ? theme.colors.background.message
          : theme.colors.background.chat,
        boxShadow: `0 4px 6px -1px ${
          isUser
            ? theme.colors.background.overlay + "40"
            : theme.colors.background.chat + "40"
        }`,
      }}
      className={`flex items-start gap-3 p-4 rounded-lg mb-4 max-w-[80%]
        ${isUser ? "ml-auto" : "mr-auto"}
        hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      <motion.div className="flex-shrink-0" variants={iconVariants}>
        {isUser ? (
          <UserIcon
            className="h-6 w-6"
            style={{
              color: theme.colors.ui.icon,
              filter: `drop-shadow(0 2px 4px ${theme.colors.background.overlay}40)`,
            }}
          />
        ) : (
          <ComputerDesktopIcon
            className="h-6 w-6"
            style={{
              color: theme.colors.ui.icon,
              filter: `drop-shadow(0 2px 4px ${theme.colors.background.overlay}40)`,
            }}
          />
        )}
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div
          className="prose prose-invert max-w-none"
          style={{
            color: theme.colors.text.primary,
            fontSize: "0.95rem",
            lineHeight: "1.5",
          }}
        >
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatMessage;
