import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'orbit-navy':    '#0A1024',
        'navy-800':      '#0D1530',
        'navy-700':      '#111d3d',
        'electric-blue': '#0066FF',
        'blue-glow':     '#3385FF',
        'cyan-accent':   '#00D4FF',
        'surface':       '#0F1A35',
        'surface-2':     '#162040',
        'text-primary':  '#F0F4FF',
        'text-muted':    '#8899BB',
        'text-dim':      '#4A5A7A',
        'border-subtle': '#1E2D50',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-sm':  '0 0 8px rgba(0, 102, 255, 0.3)',
        'glow-md':  '0 0 20px rgba(0, 102, 255, 0.25)',
        'glow-lg':  '0 0 40px rgba(0, 102, 255, 0.2)',
        'card':     '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 102, 255, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
