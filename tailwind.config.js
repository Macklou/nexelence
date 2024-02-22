/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1280px",
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['"Inter", sans-serif;'],
        plus: ['"Plus Jakarta Sans", sans-serif;'],
      },
      colors: {
        blackTheme: "#181818",
        lightGray: "#999999",
        gray: "#C9C9C9",
        darkGray: "#232323",
        blackOpacity: "rgba(0, 0, 0, 0.5)",
        darkBorder: "#333333",
      },
    },
  },
  plugins: [],
};
