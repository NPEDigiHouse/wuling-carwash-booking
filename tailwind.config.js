/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#0047D0",
        secondary: "#3BAF5B",
        black: "#000000",
        light_gray: "#FAFAFA",
        white: "#FFFFFF",
        danger: "#FF6161",
      },
    },
  },
  plugins: [],
};
