import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Input from "./ui/Input";
import { themeConfig } from "../config/theme";

const ChatInput = ({ onSendMessage, theme, placeholder }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const buttonAnimation = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      filter: `drop-shadow(0 0 8px ${theme.colors.ui.hover}80)`,
    },
    tap: { scale: 0.95 },
    disabled: {
      scale: 0.95,
      opacity: 0.5,
    },
    transition: {
      type: "spring",
      stiffness: theme.animation.stiffness,
      damping: theme.animation.damping,
    },
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="relative flex items-center">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="w-full pr-12 transition-all duration-200"
          style={{
            borderColor: theme.colors.ui.scrollbar + "40",
            backgroundColor: theme.colors.background.input + "cc",
            color: theme.colors.text.primary,
            caretColor: theme.colors.ui.hover,
            "::placeholder": {
              color: theme.colors.text.placeholder,
            },
            boxShadow: `0 4px 6px -1px ${theme.colors.background.overlay}40`,
          }}
        />
        <motion.button
          type="submit"
          disabled={!message.trim()}
          style={{
            color: message.trim()
              ? theme.colors.ui.hover
              : theme.colors.text.placeholder,
          }}
          className="absolute right-2 flex items-center justify-center p-2 disabled:cursor-not-allowed"
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          animate={!message.trim() ? "disabled" : "initial"}
          variants={buttonAnimation}
          layout
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatInput;
