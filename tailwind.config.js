/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#3867D6",
        secondary: "#3BAF5B",
        third: "#0FBCF9",
        black: "#2d3436",
        light_gray: "#FAFAFA",
        text_gray: "#808080",
        white: "#FFFFFF",
        danger: "#FF6161",
        yellow: "#FEDD00",
      },
    },
  },
  plugins: [],
};
