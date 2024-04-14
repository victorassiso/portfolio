import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '470px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        title: ['Roboto Flex', 'Georgia', 'serif'],
      },
      colors: {
        white: '#FFFFFF', // White
        black: '#0e0e0e', // Black
        background: '#141414', // Dark Gray 800
        primary: '#2C6AA3', // Blue
        card: {
          DEFAULT: '#222222', // Dark gray 600,
          foreground: '#343434', // Dark gray 400
        },
        muted: {
          DEFAULT: '#727272', // Gray
          foreground: '#C2C2C2', // Light Gray
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
      },
    },
  },
  plugins: [],
}
export default config
