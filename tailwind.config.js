module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 30px rgba(28, 25, 23, 0.07)',
      },
      colors: {
        sand: {
          50: '#f8f5f1',
          100: '#f3eee8',
          200: '#e6dccd',
          300: '#d9c7b3',
          600: '#8a6f59',
          700: '#6d5242',
        },
      },
    },
  },
  plugins: [],
};
