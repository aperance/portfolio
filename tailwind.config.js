const { fontFamily, colors, opacity } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      ...fontFamily,
      saira: ["Saira Extra Condensed", "Impact", "system-ui"],
    },
    colors: {
      ...colors,
      "impact-color": "#bd5d38",
      "default-color": "#495057",
    },
    opacity: { ...opacity, 60: ".6" },
  },
  variants: {},
  plugins: [],
  purge: false,
};
