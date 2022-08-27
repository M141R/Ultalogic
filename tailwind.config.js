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
        dark: "#2F2F30",
        secondary: "#F9EFE4",
        tertiary: "#e0fdff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
