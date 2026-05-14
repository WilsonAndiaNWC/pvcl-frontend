/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--brand-primary)',
        secondary: 'var(--brand-secondary)',
        info: 'var(--brand-info)',
        success: 'var(--brand-success)',
        warning: 'var(--brand-warning)',
        danger: 'var(--brand-danger)',
        rose: 'var(--brand-rose)',
        inverse: 'var(--brand-inverse)',
      },
    },
  },
  plugins: [],
};
