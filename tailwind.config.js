/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fffaf1",
        ink: "#342b26",
        olive: "#536348",
        moss: "#9da88a",
        clay: "#985846",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        invitation: "0.24em",
      },
    },
  },
  plugins: [],
};
