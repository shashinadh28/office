module.exports = {
  // ... other config
  theme: {
    extend: {
      spacing: {
        '100': '25rem',
        '200': '50rem',
        '300': '75rem',
      },
      fontFamily: {
        // Properly register all fonts using CSS variables for Next.js
        kanit: ['var(--font-kanit)'],
        // Add Poppins and ensure it falls back to sans-serif fonts
        poppins: ['var(--font-poppins)', 'sans-serif'],
        // Add Montserrat and ensure it falls back to sans-serif fonts
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  // ... other config
};