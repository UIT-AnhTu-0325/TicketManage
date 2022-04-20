module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
      backgroundColor: {
        redd: "#fff",
      },
      colors: {
        primary: "#ccc",
        border_opacity: "#fff",
      },
    },
    screens: {
      "2xl": { max: "2235px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      ssm: { max: "350px" },
    },
    // fontSize: {
    //   base: "1.6rem",
    //   lg: "1.8rem",
    //   xl: "2rem",
    //   "2xl": "2.4rem",
    //   "3xl": "3rem",
    // },
  },
  plugins: [],
};
