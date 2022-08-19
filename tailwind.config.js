/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        head: ["'Space Grotesk', sans-serif"],
        body: ["'Inter', sans-serif"],
        extra: ["'JetBrains Mono', monospace"],
      },
      colors: {
        dark: "#0d0d0d",
        yellow: "#FFEF9F",
        red: "#FFD6E0",
        green: "#C1FBA4",
        blue: "#90F1EF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
