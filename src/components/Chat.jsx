import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OpenAI from "openai";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LoadingAnimation from "./ui/LoadingAnimation";
import PropTypes from "prop-types";

const Chat = ({
  resumeData,
  theme,
  config,
  apiKey,
  baseURL,
  model,
  temperature,
  maxTokens,
}) => {
  const openai = new OpenAI({
    apiKey,
    baseURL,
    dangerouslyAllowBrowser: true,
  });

  const [messages, setMessages] = useState([
    {
      content: config.welcomeMessage,
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generatePrompt = (userMessage) => {
    return `You are an AI assistant helping with questions about a resume. Here's the resume data:
    ${JSON.stringify(resumeData)}
    
    Please answer the following question about the resume: ${userMessage}
    
    Provide a concise and relevant response based only on the information in the resume.`;
  };

  const handleSendMessage = async (message) => {
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { content: message, isUser: true }]);

      const response = await openai.chat.completions.create({
        model,
        messages: [
          {
            role: "user",
            content: generatePrompt(message),
          },
        ],
        temperature,
        max_tokens: maxTokens,
      });

      const aiResponse = response.choices[0].message.content;
      setMessages((prev) => [...prev, { content: aiResponse, isUser: false }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          content: config.errorMessage,
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: theme.animation.duration },
  };

  return (
    <motion.div
      {...containerAnimation}
      className="flex flex-col h-full max-w-3xl mx-auto rounded-lg shadow-xl overflow-hidden"
      style={{
        backgroundColor: theme.colors.background.chat,
        boxShadow: `0 8px 32px -4px ${theme.colors.background.overlay}60`,
      }}
    >
      <motion.div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
        style={{
          scrollbarColor: `${theme.colors.ui.scrollbar}40 ${theme.colors.background.overlay}80`,
          backgroundColor: theme.colors.background.main,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: theme.animation.duration * 0.6 }}
      >
        <AnimatePresence mode="popLayout">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: theme.animation.stiffness,
                damping: theme.animation.damping,
              }}
            >
              <ChatMessage
                message={message.content}
                isUser={message.isUser}
                theme={theme}
              />
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mr-auto"
            >
              <LoadingAnimation theme={theme} />
            </motion.div>
          )}
        </AnimatePresence>
        <div />
      </motion.div>
      <motion.div
        className="p-4 border-t"
        style={{
          backgroundColor: theme.colors.background.input,
          borderColor: theme.colors.ui.scrollbar + "20",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: theme.animation.duration }}
      >
        <ChatInput
          onSendMessage={handleSendMessage}
          theme={theme}
          placeholder={config.inputPlaceholder}
        />
      </motion.div>
    </motion.div>
  );
};

Chat.propTypes = {
  resumeData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  apiKey: PropTypes.string,
  baseURL: PropTypes.string,
  model: PropTypes.string,
  temperature: PropTypes.number,
  maxTokens: PropTypes.number,
};

export default Chat;
