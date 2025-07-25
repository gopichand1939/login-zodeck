/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        'light-ray': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.2)', opacity: '0.4' },
        },
        'light-ray-delayed': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.15' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
        'lightning-flash': {
          '0%, 100%': { opacity: '0' },
          '5%': { opacity: '0.7' },
          '6%, 10%': { opacity: '0' },
          '12%': { opacity: '0.4' },
          '13%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'light-ray': 'light-ray 8s infinite ease-in-out',
        'light-ray-delayed': 'light-ray-delayed 10s infinite ease-in-out',
        'lightning-flash': 'lightning-flash 6s infinite',
      },
    },
  },
  plugins: [],
};
