/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fontawesome: ['FontAwesome']
      },
    },
    screens: {
  sm: { max: '640px' },          // Small devices (sm)
  md: { max: '768px' },          // Medium devices (md)
  lg: { min: '769px', max: '1024px' },  // Large devices (lg)
  xl: { min: '1025px', max: '1280px' }, // Extra large devices (xl)
  '2xl': { min: '1281px', max: '1536px' }, // Extra extra large devices (2xl)
  '3xl': { min: '1537px' } // Extra extra extra large devices (3xl)
}

  },
  plugins: [],
}