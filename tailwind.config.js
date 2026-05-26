/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'corp-white':  '#ffffff',
        'corp-bg':     '#f8f9fa',
        'corp-blue':   '#003f7f',
        'corp-navy':   '#1a1a2e',
        'corp-gold':   '#c8a951',
        'corp-text':   '#1a1a1a',
        'corp-muted':  '#4a4a4a',
        'corp-border': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'card':      '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover':'0 4px 16px rgba(0,63,127,0.12)',
        'blue':      '0 0 40px rgba(0,63,127,0.15)',
      },
    },
  },
  plugins: [],
};
