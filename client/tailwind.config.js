/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  colors: {
    background: '#091B11',
    text: 'currentColor',
    primary: '#5C64B6',
    secondary: '#64DBCC',
    accent: '#9FD93A',
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
