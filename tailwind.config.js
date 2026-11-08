/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F5F1EA',
        },
        beige: {
          100: '#F1EDE5',
          200: '#E8E1D5',
          300: '#DDD3C2',
        },
        terracotta: {
          50: '#FBF2EE',
          100: '#F3DDD2',
          200: '#E7BCA9',
          300: '#DB9B80',
          400: '#C7795A',
          500: '#B36145',
          600: '#964E37',
          700: '#7A3E2D',
          800: '#5E2F22',
          900: '#421F18',
        },
        sage: {
          50: '#F1F4EF',
          100: '#DDE4D7',
          200: '#BCC9B0',
          300: '#9BAD8B',
          400: '#89967B',
          500: '#747F66',
          600: '#5E6852',
          700: '#47513F',
          800: '#313A2D',
          900: '#1B221A',
        },
        charcoal: {
          50: '#F2F2F2',
          100: '#E0E0E0',
          200: '#C1C1C1',
          300: '#A2A2A2',
          400: '#6E6E6E',
          500: '#4A4A4A',
          600: '#3A3A3A',
          700: '#292929',
          800: '#1E1E1E',
          900: '#141414',
        },
        success: {
          50: '#ECFDF3',
          100: '#D1FADF',
          400: '#12B76A',
          500: '#079455',
          600: '#039855',
          700: '#027A48',
        },
        warning: {
          50: '#FFFAEB',
          100: '#FEF0C7',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
        },
        error: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          400: '#F04438',
          500: '#D92D20',
          600: '#BA0C1A',
          700: '#912018',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      // The markup uses font-500/600/700 throughout; Tailwind has no such
      // utilities by default, so every heading rendered at normal weight.
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
      },
      fontSize: {
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(41, 41, 41, 0.06), 0 1px 2px 0 rgba(41, 41, 41, 0.04)',
        'card-hover': '0 12px 32px -8px rgba(41, 41, 41, 0.12), 0 4px 12px -4px rgba(41, 41, 41, 0.06)',
        'soft': '0 2px 8px 0 rgba(41, 41, 41, 0.05)',
        'lifted': '0 24px 48px -16px rgba(41, 41, 41, 0.18)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      // `smooth` is not a valid CSS easing keyword, which made the browser drop
      // these declarations. `both` also hides delayed elements until they start.
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
};
