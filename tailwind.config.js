/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/ui-framework/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Almarai"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms',{
      strategy: 'class',
    }),

    require("flowbite/plugin"),

  ],
}
