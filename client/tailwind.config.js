/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    width: {
      // Custom width of 500px
      500: "200px",

      // Custom width of 20REM
      "20rem": "20rem",
    },

    colors: {
      brown: {
        50: "#fdf8f6",
        100: "#f2e8e5",
        200: "#eaddd7",
      },
    },

    plugins: [],
  },
};
