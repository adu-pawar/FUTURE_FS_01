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
        primary: {
          light: "#6366f1", // Indigo
          dark: "#64ffda",  // Teal
        },
        background: {
          light: "#f8fafc",
          dark: "#0a192f",
        },
        surface: {
          light: "#ffffff",
          dark: "#112240",
        },
        text: {
          primary: {
            light: "#1e293b",
            dark: "#ccd6f6",
          },
          secondary: {
            light: "#64748b",
            dark: "#8892b0",
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'spin 10s linear infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
