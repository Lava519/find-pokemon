/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/*/*.jsx"],
  theme: {
    extend: {
      colors: {
        'poke-red': '#f00000',
        'poke-black': '#222224',
        'poke-gray': '#363638',
        'poke-white': '#f0f0f0'
      },
      animation: {
        "pop-in": "pop-in 0.5s forwards",
        "pop-out": "pop-out 0.5s forwards",
        "rotate": "rotate 0.5s infinite",
      },
      keyframes: {
        "pop-in": {
          "0%": { scale: "0" },
          "60%": { scale: "1.7" },
          "100%": { scale: "1" }
        },
        "pop-in-delayed": {
          "0%": { scale: "0" },
          "90%": { scale: "0" },
          "95%": { scale: "0.2" },
          "100%": { scale: "1" }
        },
        "pop-out": {
          "0%": { scale: "1" },
          "60%": { scale: "1.7" },
          "100%": { scale: "0" }
        },
        "rotate": {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(360deg)"},
        }
      }
    },
  },
  plugins: [],
}

