import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAFAF8",
          surface: "#F2EFE7",
        },
        ink: {
          DEFAULT: "#17211C",
          soft: "#4B5750",
        },
        line: "#DFDACE",
        accent: {
          DEFAULT: "#1F7A5C",
          dim: "#175F47",
          bright: "#2E9974",
        },
        night: {
          DEFAULT: "#111A15",
          surface: "#182620",
          line: "#2B3A32",
        },
        cream: "#F3EFE3",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        layout: "68rem",
      },
      keyframes: {
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        caret: "caret 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
