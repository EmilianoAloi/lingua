/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#f04967',
        customViolet: '#393d72',
        customBgPink: '#FFF7F8',
        customGray: '#8B8D98',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true, // Centra el contenedor por defecto
        padding: '1rem', // Padding interno
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  daisyui: {
    themes: ['light'], // Esto habilita solo el tema claro
  },
  plugins: [
    require('daisyui'),
  ],
};
