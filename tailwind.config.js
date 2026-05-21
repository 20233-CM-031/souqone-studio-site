/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#101113',
        ink: '#17191D',
        cream: '#F8F3EA',
        gold: '#C7A45B',
        emerald: '#0F6B4F',
        mist: '#A8ADB4',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 70px rgba(199, 164, 91, 0.18)',
      },
    },
  },
  plugins: [],
};
