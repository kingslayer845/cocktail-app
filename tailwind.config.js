/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "380px",
      md: "658px",
      lg: "976px",
      xl: "1240px",
    },
    extend: {},
  },
  plugins: [],
};
