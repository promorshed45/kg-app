/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        primary: '#14B8A6',
        primaryLight: '#2DD4BF',
        primaryDeep: '#0F766E',
        secondary: '#E11D48',
        secondaryLight: '#F43F5E',
        secondaryDeep: '#BE123C',
        gradientPrimary: '#F0FDFA',
        gradientSecondary: '#FFF1F2',
        accent: {
          DEFAULT: '#7E30E1',
          hover: '#49108B'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
