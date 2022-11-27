/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["IRANYekan-Ubitex"],
      },
      animation: {
        ver_7s: "7s ease-in-out 0s infinite normal none running floatUp1",
        ver_5s: "5s ease-in-out 0s infinite normal none running floatUp1",
        hor_7s: "7s ease-in-out 0s infinite normal none running floatLeft",
        hor_5s: "5s ease-in-out 0s infinite normal none running floatLeft",
      },
    },
  },
  plugins: [],
};
