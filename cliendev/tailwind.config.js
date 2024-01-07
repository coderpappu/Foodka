/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    extend: {
      screens: {
        scw: "500px",
      },
      // w-full sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]
      // container width
      width: {
        smw: "540px",
        mdw: "720px",
        lgw: "960px",
        xlw: "1140px",
        xxlw: "1320px",
      },
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
