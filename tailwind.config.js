/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,primary-500ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#F79517",
        "primary-100": "#FCF3E6",
        "primary-300": "#D61724",
        "secondary-50": "#514D4D"
      },
      backgroundImage: (theme) => ({
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}