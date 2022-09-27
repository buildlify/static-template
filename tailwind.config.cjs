/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#000',
      secondary: '#000',
      black: '#000',
      white: '#fff',
      gray: '#ccc',
    },
    borderRadius: {
      primary: '5px',
    },
    boxShadow: {
      primary: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Open Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
