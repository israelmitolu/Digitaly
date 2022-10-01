/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1440px",
      sl: "2560px",
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "t-banner": "url('assets/images/Home Trump Banner.png')",
        "work-banner-1": "url('assets/images/Classic Blue Bg.png')",
        "work-banner-2": "url('assets/images/Orangy Wave Bg.png')",
        "cta-banner": "url('assets/images/Start Project Bg.png')",
      },
    },
  },
  plugins: [],
};
