/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: { 'min': "375px", 'max': '767px' },
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        accent: {
          DEFAULT: "#64ffda",
          hover: "#4ad6b5",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          hover: "rgba(255, 255, 255, 0.1)",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        typing: "typing 3.5s steps(40, end), blink .75s step-end infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
