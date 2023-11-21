import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dee5fe",
          200: "#bdcbfe",
          300: "#9cb2fd",
          400: "#7b98fd",
          500: "#5a7efc",
          600: "#4865ca",
          700: "#364c97",
          800: "#243265",
          900: "#121932",
        },
        black: {
          100: "#cccce0",
          200: "#9999c0",
          300: "#6667a1",
          400: "#333481",
          500: "#000162",
          600: "#00014e",
          700: "#00013b",
          800: "#000027",
          900: "#000014",
        },
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        hero1: "url('/hero1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
