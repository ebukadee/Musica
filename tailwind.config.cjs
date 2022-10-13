/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        dark: "#1D2123",
        darkGlass: "#1d21231e",
        darker: "#15181a",
        secondary: "#00f6ff",
        dimWhite: "#EFEEE040",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        QuickSand: ["QuickSand", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
