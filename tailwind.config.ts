import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", desk: "900px" },
    extend: {
      colors: {
        paper: "#F6F6F4",
        ink: "#111214",
        green: { DEFAULT: "#1F4A33", dark: "#163826" },
        band: "#ECECE9",
        body: "#3A3B3F",
        muted: "#55565A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { none: "0" },
    },
  },
  plugins: [],
};

export default config;
