/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stone': {
          '150': '#e8e8e8'
        }
      },
      screens: {
        '3xl': '2048'
      },
      borderWidth: {
        DEFAULT: '1.5px',
      },
      lineHeight: {
        '11': '2.75rem',
      },
      boxShadow: {
        smooth: '0px 0px 12px 9px #00000008'
      },
      dropShadow: {
        smooth: '0px 0px 12px 9px #00000008'
      }
    }
  },
  plugins: [],
}
