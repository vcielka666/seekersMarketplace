/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Adjust according to your project structure
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#52959f', // Example custom color (blue-700 from Tailwind)
        'primary-foreground': '#ffffff', // Example custom foreground color
      },
    },
  },
  plugins: [],
}
