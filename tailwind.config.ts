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
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        hero1: "url('/hero1.jpg')",
        nature: "url('/nature.jpg')",
        nature2: "url('/nature2.jpg')",
        nature3: "url('/nature3.jpg')",
        nature4: "url('/nature4.jpg')",
        nature5: "url('/nature5.jpg')",
        nature6: "url('/nature6.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", " sans-serif"],
        explora: ["Explora", "serif"],
      },
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
  },
  plugins: [],
};
export default config;
