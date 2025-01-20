import React, { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Input from "./ui/Input";
import { themeConfig } from "../config/theme";

const ChatInput = ({ onSendMessage }) => {
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
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
    transition: {
      type: "spring",
      stiffness: themeConfig.animation.stiffness,
      damping: themeConfig.animation.damping,
    },
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="relative">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={themeConfig.chatbot.inputPlaceholder}
          className="pr-12"
        />
        <motion.button
          type="submit"
          disabled={!message.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-accent-light 
            disabled:text-gray-600 disabled:cursor-not-allowed transition-colors duration-200"
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={buttonAnimation}
        >
          <PaperAirplaneIcon className="h-6 w-6" />
        </motion.button>
      </div>
    </form>
  );
};

export default ChatInput;
