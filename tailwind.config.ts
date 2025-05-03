import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#0F1011",
        white: "#FBFBFF",
        gray: {
          100: "#f1f5f9",
          200: "#CBD5E1",
          300: "#B3BAC5",
          500: "#8A8C91",
          700: "#2D2F39",
          900: "#212439",
        },
        purple: {
          100: "#EBE8F5",
          500: "#6238EC",
          700: "#3B12C1",
        },
        green: {
          200: "#A8F1E7",
          400: "#009E88",
        },

        blue: {
          300: "#5A72A0",
          400: "#01A4D1",
          500: "#0E4BC2",
          800: "#142341",
          900: "#10172A",
        },
        red: {
          500: "#FFD850",
        },
        primary: "#2686C6",
        secondary: "#F2BB34",
        warning: "#FFD850",
        success: "#00BA40",
        error: "#FF2B2B",
      },
      boxShadow: {
        md: "#0741D21A 0px 9px 30px",
        dark: "#060a1f 1px 1px 30px",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeInImage: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInText: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInImage: "fadeInImage 1s ease-out",
        fadeInText: "fadeInText 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
