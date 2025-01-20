import { themeConfig } from "./src/config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: themeConfig.colors.primary.default,
          light: themeConfig.colors.primary.light,
          dark: themeConfig.colors.primary.dark,
        },
        accent: {
          DEFAULT: themeConfig.colors.accent.default,
          light: themeConfig.colors.accent.light,
          dark: themeConfig.colors.accent.dark,
        },
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
