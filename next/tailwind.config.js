/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        'block': '600px',
        'img_1': '500px',
        'test': '10000px'
      },
      spacing: {
        '450px': '450px',
        '500px': '500px',
      },
      colors: {
        'one': '#e4d7c5',
        'two': '#6a6f4c'
      },
    },
  },
  plugins: [],
};
