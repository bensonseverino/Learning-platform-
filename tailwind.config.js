/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        lights: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
      },
      container: {
        center: true,
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
