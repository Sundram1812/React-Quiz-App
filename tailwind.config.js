/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto Serif', serif"],
        dotted: ["'Raleway Dots', sans-serif"],
        codyStar: ["'Codystar', sans-serif"],
      },
    },
  },

  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
