module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vdarkblue: "	#070439",
        desatdarkblue: "#585989",
        brightblue: "#3065f8",
        modcyan: "	#3c9f8f",
        lightgrayblue: "#f6f6fe",
        lightgray: "	#bfbfbf",
        violet: "#524bd8",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
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
