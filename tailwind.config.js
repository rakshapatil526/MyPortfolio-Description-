/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#070a12',
          900: '#0b0f19',
          850: '#101626',
          800: '#161e33',
          700: '#1e2942',
          600: '#334155',
        },
        brand: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          purple: '#8b5cf6',
          indigo: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.15)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
        'glow-lg': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
      }
    },
  },
  plugins: [],
}
