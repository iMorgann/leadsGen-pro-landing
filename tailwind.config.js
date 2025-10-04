/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c5fb',
          400: '#8aa1f8',
          500: '#667eea',
          600: '#5568d3',
          700: '#4553b8',
          800: '#3a4794',
          900: '#323d78',
        },
        secondary: {
          500: '#764ba2',
          600: '#653a8f',
          700: '#542a7c',
        }
      }
    },
  },
  plugins: [],
}
