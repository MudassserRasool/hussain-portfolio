/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#ECF2FF',
          500: '#3B82F6',
          600: '#175CFF',
          700: '#000C29',
        },
      },
      backgroundImage: {
        'custom-blue-gradient':
          'linear-gradient(hsla(222, 100%, 8%, 1), hsla(222, 100%, 20%, 1))',
      },
    },
  },
  plugins: [],
};
