export const DEFAULT_THEME = {
  colors: {
    primary: {
      default: "#0f172a",
      light: "#1e293b",
      dark: "#020617",
    },
    accent: {
      default: "#38bdf8",
      light: "#7dd3fc",
      dark: "#0284c7",
    },
  },
  animation: {
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

export const DEFAULT_CHATBOT_CONFIG = {
  name: "Resume GPT Assistant",
  description: "Your AI-powered resume expert - Ask anything about the resume!",
  welcomeMessage:
    "Hi! I'm your AI resume assistant. Ask me anything about the resume!",
  errorMessage: "I'm sorry, I encountered an error. Please try again.",
  inputPlaceholder: "Ask me anything about the resume...",
};
