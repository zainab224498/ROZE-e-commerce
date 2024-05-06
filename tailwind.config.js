/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 25%' },
          '25%': { backgroundPosition: '75% 25%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '25% 75%' },
          '100%': { backgroundPosition: '0% 25%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 0.1s ease infinite alternate',
      },
    },
  },
}
