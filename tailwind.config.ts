import type { Config } from "tailwindcss";

/**
 * Colors are driven by CSS variables (see globals.css) so the whole palette can
 * flip between light and dark by toggling the `.dark` class on <html>.
 * Channels are stored as space-separated RGB (e.g. "246 241 231") and consumed
 * with <alpha-value> so opacity modifiers (bg-cream/95, text-ink/80) still work.
 *
 * `maroon`, `sunset`, and `onbrand` are brand/on-dark constants — the same in
 * both themes — so they stay as literal hex.
 */
const v = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: v("--c-cream"),
          dark: v("--c-cream-dark"),
        },
        espresso: {
          DEFAULT: v("--c-espresso"),
          light: v("--c-espresso-light"),
        },
        ink: {
          DEFAULT: v("--c-ink"),
          muted: v("--c-ink-muted"),
        },
        offwhite: v("--c-offwhite"),
        // Constant "light on brand/dark surface" color — never flips.
        onbrand: "#FBF8F2",
        // Accent used for link/hover TEXT. Maroon on light surfaces, brand
        // yellow in dark mode where maroon is too dark to read. (Button/border
        // backgrounds keep the fixed `maroon` token below.)
        accent: v("--c-accent"),
        maroon: {
          DEFAULT: "#7A2A1D",
          dark: "#5C1F15",
        },
        sunset: {
          1: "#E8B15C",
          2: "#C2571F",
          3: "#8B2E15",
        },
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
