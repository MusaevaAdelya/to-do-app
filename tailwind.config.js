/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9E78CF",
        secondary: "#78CFB0",
        base: {
          100: "#1D1825",
          150:"#15101C",
          200: "#0D0714",
        },
      },
    },
  },
  plugins: [],
};
