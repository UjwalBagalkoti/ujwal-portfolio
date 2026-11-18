import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { chalk: "#E9EDF0", ink: "#0F1B26", deep: "#0C1B2E", mist: "#A9B8C6", cobalt: "#2437E8", sun: "#FFC83D", rule: "#C9D2DA" },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
