/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // ...
      'sky': {
        200: '#bae6fd',
        400: '#38bdf8',
      },
      'gray': {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280'
      },
      'red': {
        500: '#ef4444',
        700: '#b91c1c'
      },
      'cyan': {
        200: '#a5f3fc',
      }
      // ...
    },
    extend: {
      // ...
      ringWidth: ['hover', 'active'],
      backgroundColor: ['active'],
      borderColor: ['active']
    },
  },
  plugins: [],
}

