export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: {
        perspective: "perspective(1000px)",
      },
      fontFamily: {
        sans: ["sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
      });
    },
  ],
};
