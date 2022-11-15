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
        tertiery: "#F1F3F7",
        primaryBlue: "#182958",
        secondaryBlue: "#0092AC",
        secondary: "#F6F9FC",
        whiteBackground: "#E5E5E5",
        primaryText: "#444B55",
      },
    },
  },
  plugins: [],
};
