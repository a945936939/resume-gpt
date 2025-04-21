import { theme } from "./src/config/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: theme.colors.primary.default,
          light: theme.colors.primary.light,
          dark: theme.colors.primary.dark,
        },
        accent: {
          DEFAULT: theme.colors.accent.default,
          light: theme.colors.accent.light,
          dark: theme.colors.accent.dark,
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
              color: theme.colors.accent.light,
              "&:hover": {
                color: theme.colors.accent.default,
              },
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: theme.colors.accent.light,
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
