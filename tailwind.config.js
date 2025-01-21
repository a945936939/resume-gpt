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
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            a: {
              color: themeConfig.colors.accent.light,
              "&:hover": {
                color: themeConfig.colors.accent.default,
              },
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: themeConfig.colors.accent.light,
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
