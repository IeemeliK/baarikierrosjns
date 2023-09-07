/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-background': 'var(--color-background)',
        'primary-text': 'var(--color-text)'
      }
    }
  },
  plugins: []
}
