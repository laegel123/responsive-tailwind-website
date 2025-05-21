/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'display-2xl': ['64px', {
          lineHeight: '80px',
          letterSpacing: '-0.02em',
        }],
        'display-xl': ['56px', {
          lineHeight: '72px',
          letterSpacing: '-0.01em',
        }],
        'display-xl': ['56px', {
          lineHeight: '72px',
          letterSpacing: '-0.01em',
        }],
        'display-lg': ['48px', {
          lineHeight: '60px',
          letterSpacing: '-0.01em',
        }],
        'display-md': ['36px', {
          lineHeight: '48px',
          letterSpacing: '-0.01em',
        }],
        'display-sm': ['30px', {
          lineHeight: '40px',
          letterSpacing: '-0.01em',
        }],
        'display-xs': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em',
        }],
        'body-xl': ['20px', {
          lineHeight: '28px',
          letterSpacing: '0.01em',
        }],
        'body-lg': ['18px', {
          lineHeight: '28px',
          letterSpacing: '0.01em',
        }],
        'body-md': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.01em',
        }],
        'body-sm': ['14px', {
          lineHeight: '20px',
          letterSpacing: '0.01em',
        }],
        'body-xs': ['12px', {
          lineHeight: '16px',
          letterSpacing: '0.01em',
        }],
      },

      colors: {
        'primary': {
          100: '#E0F2FE',
          600: '#0876DD',
        },
        'secondary': {
          100: '#CFFAFE',
          600: '#29D2D3',
        },
        'neutral': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
}

