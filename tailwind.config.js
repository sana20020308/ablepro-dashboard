/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'ml-64',
    'ml-20',
    'w-64',
    'w-20',
    'left-64',
    'left-20'
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'margin': 'margin',
        'left': 'left',
      },
    },
  },
  plugins: [],
};
