/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      s: '200px',
      xs: '400px',
      sm: "640px",
      md: "798px ",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {},
    colors: {
      purple: "#6C5FBC",
      gray: "#606060",
      lightgray: "#CDCDCD",
      black: "#201F1F",
      lightblack: "#323142",
      yelow: "#DAA31A",
      red: "#FB471D",
      white: "#fff",
      green: "#309D5B",
      body: "#F9F9F9",
      footer: "#EAEAEA",
    },
  },
  plugins: [],
};
