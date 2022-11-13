/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        placeholder: "#949AB5",
        gray: "#F1F3F7",
        primary: "#0092AC",
        secondary: "#F6F9FC",
      },
    },
  },
  plugins: [],
};
