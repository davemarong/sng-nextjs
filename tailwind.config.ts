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
        primary: colors.red,
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
