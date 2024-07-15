/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 15px 0 rgba(184, 184, 210, 0.5)',
        'custom2': '0 1px 7px 0 rgba(171, 171, 171, 0.25)',

      },
    },
  },
  plugins: [],
}