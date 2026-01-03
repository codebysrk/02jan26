/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
          600: "#ea580c", // Burnt Orange
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        nature: {
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d", // Fresh Green
        },
        dark: {
          800: "#1c1917", // Warm Charcoal
          900: "#0c0a09",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Lato"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
