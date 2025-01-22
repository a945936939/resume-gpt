export const openaiConfig = {
  model: "deepseek-chat",
  temperature: 1.5,
  maxTokens: 200,
};

export const themeColors = {
  primary: "#0f172a",
  primaryLight: "#1e293b",
  primaryDark: "#020617",
  accent: "#38bdf8",
  accentLight: "#7dd3fc",
  accentDark: "#0284c7",
};

export const chatbotConfig = {
  name: "Truman Personal Assistant",
  description: "Your AI-powered resume expert - Ask anything about the resume!",
  welcomeMessage:
    "Hi! I'm your AI resume assistant. Ask me anything about the resume!",
  errorMessage: "I'm sorry, I encountered an error. Please try again.",
  inputPlaceholder: "Ask me anything about the resume...",
};

export const animationConfig = {
  duration: 0.5,
  stiffness: 260,
  damping: 20,
  barColor: themeColors.accent,
};
