const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Fancy: ["Roboto Serif", "serif"],
      },
      colors: {
        "black-500": "#0c0c0c",
        "black-100": "#121212",
        light: "#f5f5f5",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        fadeIn: "fadeIn .4s ease-in",
        fadeUp: "fadeUp .8s ease-in",
        fadeOut: "fadeOut .5s ease-out",
      },
      boxShadow: {
        dark: "rgba(100, 100, 111, 0.2) 0px 5px 24px 0px;",
        lightWhite: "rgba(255, 255, 255, 0.2) 0px 5px 24px 0px;",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
  darkMode: "class",
};
