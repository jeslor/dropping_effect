/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        dropDown: {
          "0%":{transform: "translateY(-20px)"},
          "20%":{transform: "translateY(10px)"},
          "100%": {transform: "translateY(100vh)"}
        }
      },
      animation: {
        fallDown:"dropDown 3s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}