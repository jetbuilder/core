/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VS Code IDE Theme Colors
        vscode: {
          bg: '#1e1e1e',
          sidebar: '#252526',
          border: '#3c3c3c',
          hover: '#2a2d2e',
          selection: '#264f78',
          lineNumber: '#858585',
          comment: '#6a9955',
          string: '#ce9178',
          number: '#b5cea8',
          keyword: '#569cd6',
          function: '#dcdcaa',
          variable: '#9cdcfe',
          type: '#4ec9b0',
          error: '#f48771',
          warning: '#cca700',
        },
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#c8cdd2',
          300: '#a6abb0',
          400: '#6c757d',
          500: '#545b62',
          600: '#3d4349',
          700: '#2c3136',
          800: '#1f2225',
          900: '#161719',
          950: '#0d0e0f',
        },
        gunmetal: {
          50: '#f4f5f6',
          100: '#e3e5e8',
          200: '#c9cdd3',
          300: '#a3aab3',
          400: '#78818d',
          500: '#5c6570',
          600: '#4a525d',
          700: '#3e444d',
          800: '#2d3339',
          900: '#1c1f23',
          950: '#0f1113',
        },
        tactical: {
          50: '#fef8ee',
          100: '#fcefd6',
          200: '#f8dcac',
          300: '#f3c377',
          400: '#eba63f',
          500: '#e58e20',
          600: '#d07216',
          700: '#ac5714',
          800: '#8a4517',
          900: '#703a16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        code: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

