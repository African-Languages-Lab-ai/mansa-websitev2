import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F1E7",
          dark: "#EDE6D6",
        },
        espresso: {
          DEFAULT: "#1C130E",
          light: "#2A1C13",
        },
        maroon: {
          DEFAULT: "#7A2A1D",
          dark: "#5C1F15",
        },
        sunset: {
          1: "#E8B15C",
          2: "#C2571F",
          3: "#8B2E15",
        },
        ink: {
          DEFAULT: "#24170F",
          muted: "#6B5C4E",
        },
        offwhite: "#FBF8F2",
      },
      fontFamily: {
        sans: ["var(--font-open-runde)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(28, 19, 14, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
