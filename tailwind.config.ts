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
        ink: "#0F172A",
        "ink-soft": "#475569",
        "ink-faint": "#94A3B8",
        line: "#E7ECF3",
        accent: {
          DEFAULT: "#2563EB",
          ink: "#1D4ED8",
          soft: "#EFF4FF",
        },
        violet: "#7C6CF0",
        surface: "#FFFFFF",
        "surface-soft": "#F8FAFC",
        "surface-soft-2": "#F1F5F9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        sm2: "0 1px 2px rgba(15,23,42,0.04), 0 1px 1px rgba(15,23,42,0.03)",
        md2: "0 8px 24px -8px rgba(15,23,42,0.10), 0 2px 8px -2px rgba(15,23,42,0.06)",
        lg2: "0 24px 60px -20px rgba(15,23,42,0.18), 0 6px 20px -8px rgba(37,99,235,0.10)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-24px) scale(1.06)" },
          "66%": { transform: "translate(-22px,18px) scale(0.96)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
