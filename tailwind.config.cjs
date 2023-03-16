/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        'md': [
          'logo header',
          'nav main',
          'nav footer',
        ],
        'sm': [
          'logo header',
          'nav nav',
          'main main',
          'footer footer',
        ],
        'slim': [
          'logo',
          'nav',
          'main',
          'footer',
        ],
      },

      gridTemplateColumns: {
        'md': '225px 1fr',
        'sm': '225px 1fr',
        'slim': '1fr',
      },
      gridTemplateRows: {
        'md': '100px 1fr 40px',
        'sm': '100px 70px 1fr 40px',
        'slim': '100px 70px 1fr 40px',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
