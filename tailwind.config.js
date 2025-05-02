/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "24rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
