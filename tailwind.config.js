/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // GLR Brand Colors - Authentic from glr.nl
        primary: {
          50: '#f4ffe5',
          100: '#e5ffb3',
          200: '#d5ff80',
          300: '#c5ff4d',
          400: '#b5ff1a',
          500: '#8fe507',  // Main GLR Lime Green (officiële GLR kleur)
          600: '#75be06',
          700: '#5b9604',
          800: '#416f03',
          900: '#274701',
        },
        secondary: {
          50: '#f0f0f0',
          100: '#d9d9d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',  // Gray for subtle elements
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
        accent: {
          50: '#f9ffe6',
          100: '#efffb3',
          200: '#e3ff80',
          300: '#d7ff4d',
          400: '#cbff1a',
          500: '#baed00',  // Bright Lime for banners and CTAs
          600: '#9ac700',
          700: '#7aa100',
          800: '#5a7b00',
          900: '#3a5500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
