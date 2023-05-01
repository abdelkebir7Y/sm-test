const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        logo: ["Niconne", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        home: "url('./assets/images/background.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        full: "100% 100%",
      },
      spacing: {
        90: "90%",
      },
    },
  },
  plugins: [],
};
