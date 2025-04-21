// Theme configuration that reads from environment variables with fallbacks
export const theme = {
  colors: {
    primary: {
      default: "#1E293B",
      light: "#334155",
      dark: "#0F172A",
    },
    accent: {
      default: "#38BDF8",
      light: "#7DD3FC",
      dark: "#0284C7",
    },
    background: {
      main: "#1E293B", // Main app background
      chat: "#2e395f", // Chat container background
      message: "#334155", // Message background
      input: "#475569", // Input field background
      overlay: "#020617", // Overlay/modal background
    },
    ui: {
      title: "#F8FAFC", // Title text
      description: "#94A3B8", // App description text
      scrollbar: "#64748B", // Borders and dividers
      icon: "#94A3B8", // Icons and decorative elements
      hover: "#E2E8F0", // Hover states and interactions
    },
    text: {
      primary: "#F8FAFC", // Main text in messages
      secondary: "#CBD5E1", // Secondary text
      placeholder: "#94A3B8", // Input placeholder text
    },
  },
  animation: {
    duration: 0.5,
    stiffness: 260,
    damping: 20,
    animationColor: "#9aA3B8",
    barColor: "#2e395f",
  },
};
