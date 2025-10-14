/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      animation: {
        'float-particle': 'float-particle 20s ease-in-out infinite',
        'float-particle-2': 'float-particle-2 25s ease-in-out infinite',
        'float-particle-3': 'float-particle-3 30s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
        'wave-horizontal': 'wave-horizontal 6s ease-in-out infinite',
        'float-geometric': 'float-geometric 15s ease-in-out infinite',
        'skill-glow': 'skill-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.5' },
          '33%': { transform: 'translate(50px, -50px) rotate(120deg)', opacity: '0.8' },
          '66%': { transform: 'translate(-50px, 50px) rotate(240deg)', opacity: '0.6' },
        },
        'float-particle-2': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.6' },
          '33%': { transform: 'translate(-60px, 60px) rotate(180deg)', opacity: '0.9' },
          '66%': { transform: 'translate(60px, -30px) rotate(270deg)', opacity: '0.7' },
        },
        'float-particle-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'translate(30px, 40px) scale(1.3) rotate(180deg)', opacity: '0.8' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'spin-slow': {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        'wave-horizontal': {
          '0%, 100%': { transform: 'translateX(-50%) scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'translateX(-50%) scaleX(1.5)', opacity: '1' },
        },
        'float-geometric': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.4' },
          '25%': { transform: 'translate(20px, -20px) rotate(90deg)', opacity: '0.7' },
          '50%': { transform: 'translate(0, -40px) rotate(180deg)', opacity: '0.9' },
          '75%': { transform: 'translate(-20px, -20px) rotate(270deg)', opacity: '0.7' },
        },
        'skill-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
