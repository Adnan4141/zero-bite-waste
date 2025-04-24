/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '7xl': '80rem', // 1280px
      },
      colors: {
        mossGreen: '#326414',
        indiaGreen: '#428612',
        pigmentGreen: '#54AC5A',
        yellowGreen: '#BCD76D',
        teaGreen: '#E1EDC1',
        primary: '#428612',
        accent: '#BCD76D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Add more themes if desired
  },
};
