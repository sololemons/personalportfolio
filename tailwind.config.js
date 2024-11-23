/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-out', // Customize the timing and easing here
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' }, // Start slightly lower and invisible
          '100%': { opacity: 1, transform: 'translateY(0)' },  // End at normal position with full opacity
        },
      },
    },
  },
  plugins: [],
}
