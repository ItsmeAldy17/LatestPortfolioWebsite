/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        // Deep space base (remaps Tailwind grays -> blue-black + crisp whites)
        gray: {
          100: '#f5f8ff',
          200: '#e4ebf7',
          300: '#c3cfe6',
          400: '#8b97b4',
          500: '#5b6680',
          600: '#2c3650',
          700: '#1b2236',
          800: '#0d1322',
          900: '#070b16',
          950: '#04060e',
        },
        // Primary accent: ELECTRIC NEON BLUE (remaps "emerald")
        emerald: {
          300: '#7cc4ff',
          400: '#38a8ff',
          500: '#1e80ff',
          600: '#0a5ce0',
        },
        // Secondary: NEON CYAN (remaps "blue")
        blue: {
          300: '#9bf3ff',
          400: '#4fe3ff',
          500: '#16c8f0',
          600: '#0a9fc7',
        },
        // Tertiary: VIOLET/INDIGO neon (remaps "purple")
        purple: {
          400: '#9d8cff',
          500: '#7c6cff',
          600: '#5b4ce0',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
