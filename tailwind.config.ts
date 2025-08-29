import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        primary: {
          DEFAULT: "#B8860B", // Dourado escuro
          light: "#DAA520", // Dourado claro
        },
        secondary: {
          DEFAULT: "#2C3E50", // Azul escuro elegante
          light: "#34495E", // Azul um pouco mais claro
        },
      },
    },
  },
  plugins: [],
};

export default config;
