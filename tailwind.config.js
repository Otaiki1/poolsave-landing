/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#00D4D4',
        accent: '#FF8C42',
        text: '#FFFFFF99',
        highlight: '#5A5A5A',
        bg: '#303030',
        cardbg: '#FFFFFF1A',
        background: '#252525',
      },
      boxShadow: {
        custom: '8px 8px 0 0 rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
