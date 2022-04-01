module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Spartanreg: ["Spartan", "sans-serif"],
      },
      animation: {
        scroller: " scroller 1.5s linear infinite",
      },
      keyframes: {
        scroller: {
          "0%": {
            opacity: "0",
            top: "2px",
          },
          "50%": {
            opacity: "1",
            top: "50%",
          },
          "100%": {
            opacity: "0",
            top: "33%",
          },
        },
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
