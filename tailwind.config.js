/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'gradient': 'linear-gradient(94.05deg, #FFFFFF -161.35%, rgba(255, 255, 255, 0) 99.97%)',
      },
    },
  },
  plugins: [],
}

