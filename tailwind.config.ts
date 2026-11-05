import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          strong: "rgb(var(--brand-strong) / <alpha-value>)",
        },
        lavender: "rgb(var(--lavender) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderColor: {
        DEFAULT: "rgb(var(--line) / 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgb(var(--brand) / 0.55)",
        "glow-lg": "0 30px 120px -30px rgb(var(--brand) / 0.65)",
        lift: "0 24px 60px -24px rgb(0 0 0 / 0.45)",
        phone: "0 50px 100px -40px rgb(0 0 0 / 0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(18px, -22px, 0) scale(1.04)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(-2%, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(2%, -3%, 0) rotate(4deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.96)", opacity: "0.5" },
          "70%": { transform: "scale(1.12)", opacity: "0" },
          "100%": { transform: "scale(1.12)", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 16s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        "gradient-pan": "gradient-pan 14s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3.2s ease-out infinite",
        "fade-in": "fade-in 0.25s ease-out",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      opacity: {
        12: "0.12",
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
    },
  },
  plugins: [],
};

export default config;
