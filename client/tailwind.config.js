module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        120: "30rem",
        128: "32rem",
        160: "40rem",
        180: "45rem",
        200: "50rem",
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1223px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "800px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        bigstone: {
          DEFAULT: "#14213D",
          50: "#466EC2",
          100: "#3C63B8",
          200: "#325399",
          300: "#28427A",
          400: "#1E325C",
          500: "#14213D",
          600: "#060A13",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        sun: {
          DEFAULT: "#FCA311",
          50: "#FEE9C6",
          100: "#FEE1B2",
          200: "#FED28A",
          300: "#FDC262",
          400: "#FDB339",
          500: "#FCA311",
          600: "#D28403",
          700: "#9B6102",
          800: "#633E01",
          900: "#2C1C01",
        },
        mercury: {
          DEFAULT: "#E5E5E5",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#F9F9F9",
          500: "#E5E5E5",
          600: "#C9C9C9",
          700: "#ADADAD",
          800: "#919191",
          900: "#757575",
        },
      },
    },
  },
  plugins: [],
};
