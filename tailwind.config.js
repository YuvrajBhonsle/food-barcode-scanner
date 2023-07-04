/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scannerAnimation: {
          '0%': {
            top: 0,
          },
          '50%': {
            top: '100%',
          },
          '100%': {
            top: 0,
          },
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [],
};