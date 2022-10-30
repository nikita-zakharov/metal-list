/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans, sans-serif"],
    },
    container: {
      screens: {
        sm: "600px",
        md: "750px",
        lg: "970px",
        xl: "1170px",
        "2xl": "1170px",
      },
    },
    extend: {},
  },
  plugins: [],
};
