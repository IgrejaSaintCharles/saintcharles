/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      scrollBehavior: ['responsive'], // já vem no Tailwind por padrão a partir da v3
    },
  },
  plugins: [],
}
