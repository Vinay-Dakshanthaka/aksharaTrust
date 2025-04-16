/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "#E0F2FE",   // light blue
          secondary: "#F8FAFC", // light gray
          accent: "#D1FAE5",    // mint green
        },
      }
    },
  },
  plugins: [],
}