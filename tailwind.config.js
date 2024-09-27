/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        customPink: "#f04967",
        customViolet: "#393d72",
        customPink2: "#FDD8E0",
        customBgPink: "#FFF7F8",
        customGray: "#8B8D98",
        bg1: "#FFF7F8",
        bg2: "#FFFCFC",
        customBlack: "#1E1F24",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "924px",
          xl: "1280px",
        },
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui"), require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
