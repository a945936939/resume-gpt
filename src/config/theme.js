import {
  themeColors,
  chatbotConfig,
  openaiConfig,
  animationConfig,
} from "./settings";

// Theme configuration that reads from environment variables with fallbacks
export const themeConfig = {
  colors: {
    primary: {
      default: themeColors.primary,
      light: themeColors.primaryLight,
      dark: themeColors.primaryDark,
    },
    accent: {
      default: themeColors.accent,
      light: themeColors.accentLight,
      dark: themeColors.accentDark,
    },
  },
  chatbot: {
    name: chatbotConfig.name,
    description: chatbotConfig.description,
    welcomeMessage: chatbotConfig.welcomeMessage,
    errorMessage: chatbotConfig.errorMessage,
    inputPlaceholder: chatbotConfig.inputPlaceholder,
  },
  api: {
    model: openaiConfig.model,
    temperature: openaiConfig.temperature,
    maxTokens: openaiConfig.maxTokens,
  },
  animation: {
    duration: animationConfig.duration,
    stiffness: animationConfig.stiffness,
    damping: animationConfig.damping,
    barColor: animationConfig.barColor,
  },
};
