/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#080A0F',
        ink: '#0F1320',
        graphite: '#171B29',
        cream: '#F7F2E8',
        gold: '#D6B25E',
        emerald: '#14A06F',
        cyan: '#4DD8FF',
        coral: '#FF7A59',
        mist: '#A9B2C3',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 100px rgba(77, 216, 255, 0.16)',
        emerald: '0 24px 80px rgba(20, 160, 111, 0.22)',
      },
    },
  },
  plugins: [],
};
