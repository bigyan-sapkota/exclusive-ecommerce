/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
        secondary: "#F5F5F5",

        dark: "#0A0A0A",
        light: "#fafafa",
      },
    },
  },
  plugins: [],
};
