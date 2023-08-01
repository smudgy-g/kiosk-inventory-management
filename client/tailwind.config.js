/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  colors: {
    background: '#09111C',
    text: 'currentColor',
    primary: '#1BC029',
    secondary: '#091F3E',
    accent: '#E58806',
    dark: '#000000',
  },
  extend: {
    fontFamily: {
      DMSerif: ['DM Serif Display', 'serif'],
      Lato: ['Lato', 'sans-serif'],
    },
  },
};
export const plugins = [];
