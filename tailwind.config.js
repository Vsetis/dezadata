/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "800px",
        xl: "900px",
        "2xl": "900px",
      },
    },
    extend: {},
  },
  plugins: [],
};
