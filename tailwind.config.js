/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
      './public/**/*.html',
      './src/**/*.{html,js,jsx,ts,tsx,vue,astro}',
  ],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

