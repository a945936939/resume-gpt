// Theme configuration that reads from environment variables with fallbacks
export const themeConfig = {
  colors: {
    primary: {
      default: import.meta.env.VITE_PRIMARY_COLOR || "#0f172a",
      light: import.meta.env.VITE_PRIMARY_LIGHT || "#1e293b",
      dark: import.meta.env.VITE_PRIMARY_DARK || "#020617",
    },
    accent: {
      default: import.meta.env.VITE_ACCENT_COLOR || "#38bdf8",
      light: import.meta.env.VITE_ACCENT_LIGHT || "#7dd3fc",
      dark: import.meta.env.VITE_ACCENT_DARK || "#0284c7",
    },
  },
  chatbot: {
    name: import.meta.env.VITE_CHATBOT_NAME || "Resume GPT Assistant",
    description:
      import.meta.env.VITE_CHATBOT_DESCRIPTION ||
      "Your AI-powered resume expert - Ask anything about the resume!",
    welcomeMessage:
      import.meta.env.VITE_WELCOME_MESSAGE ||
      "Hi! I'm your AI resume assistant. Ask me anything about the resume!",
    errorMessage:
      import.meta.env.VITE_ERROR_MESSAGE ||
      "I'm sorry, I encountered an error. Please try again.",
    inputPlaceholder:
      import.meta.env.VITE_INPUT_PLACEHOLDER ||
      "Ask me anything about the resume...",
  },
  api: {
    model: import.meta.env.VITE_OPENAI_MODEL || "gpt-3.5-turbo",
    baseURL: import.meta.env.VITE_OPENAI_BASE_URL,
    temperature: parseFloat(import.meta.env.VITE_OPENAI_TEMPERATURE || "0.7"),
    maxTokens: parseInt(import.meta.env.VITE_OPENAI_MAX_TOKENS || "200", 10),
  },
  animation: {
    duration: parseFloat(import.meta.env.VITE_ANIMATION_DURATION || "0.5"),
    stiffness: parseFloat(import.meta.env.VITE_ANIMATION_STIFFNESS || "260"),
    damping: parseFloat(import.meta.env.VITE_ANIMATION_DAMPING || "20"),
  },
};
