module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vDarkBlue: "	#070439",
        desatDarkBlue: "#585989",
        brightBlue: "#3065f8",
        modCyan: "	#3c9f8f",
        lightGrayBlue: "#f6f6fe",
        lightGray: "	#bfbfbf",
        violet: "#524bd8",
        teal: "#00d1a4",
        lightTeal: "	#35edc6",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      height: {
        400: "400px",
        420: "420px",
        600: "600px",
        800: "800px",
        sm: "20rem",
        md: "65rem",
        lg: "80rem",
      },
      width: {
        400: "400px",
        420: "420px",
        600: "600px",
        800: "800px",
        sm: "20rem",
        md: "50rem",
        lg: "80rem",
      },
    },
  },
  plugins: [],
};
