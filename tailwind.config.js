module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3a5a8c',
          light: '#7bb6fa',
          medium: '#5a8fd6',
          muted1: '#6BA3F5',
          muted2: '#4A90E2',
        },
        blue: {
          verylight1: '#e3edf7',
          verylight2: '#f7fafd',
          verylight3: '#f8fbff',
          verylight4: '#eaf2fa',
        },
        gray: {
          text: '#6b7a90',
          light: '#8ca0b8',
          border: '#dbe6f3',
          background: '#f5f5f5',
          dark: '#2c3e50',
        },
        white: '#ffffff',
        black: '#334155',
        background: {
          dark: '#1a2332',
        },
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        pale: '#e3edf7',
        accent: {
          DEFAULT: '#7bb6fa',
          light: '#a3d4fd',
          dark: '#5a8fd6',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}; 