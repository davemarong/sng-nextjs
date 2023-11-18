import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-lightest": "#d1d5db",
        "text-lighter": "#6b7280",
        "darkest-gray": "#273444",
        "dark-gray": "#8492a6",
        gray: "#d3dce6",
        "light-gray": "#f0f4f8",
        "lightest-gray": "#f8fafc",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
        hero1: "url('/hero1.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
export default config;
