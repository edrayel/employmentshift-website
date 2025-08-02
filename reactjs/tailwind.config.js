/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				heading: ['Inter', 'system-ui', 'sans-serif'], // Modern, professional headings
				body: ['Inter', 'system-ui', 'sans-serif'], // Clean, readable body text
				mono: ['JetBrains Mono', 'Fira Code', 'monospace'], // Technical/code elements
			},

			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// Employment Shift Brand Colors - Monochromatic Scheme
				brand: {
					black: '#000000',
					'gray-900': '#0F0F0F',
					'gray-800': '#1A1A1A',
					'gray-700': '#2D2D2D',
					'gray-600': '#404040',
					'gray-500': '#525252',
					'gray-400': '#737373',
					'gray-300': '#A3A3A3',
					'gray-200': '#D4D4D4',
					'gray-100': '#F5F5F5',
					'gray-50': '#FAFAFA',
					white: '#FFFFFF',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 1px)',
				sm: 'calc(var(--radius) - 2px)',
				xl: 'calc(var(--radius) + 2px)',
				'2xl': 'calc(var(--radius) + 4px)',
				'elegant-rounded-full': '9999px',
				'elegant-rounded-xl': 'calc(var(--radius) + 2px)',
				'elegant-rounded-lg': 'var(--radius)',
				'elegant-rounded-md': 'calc(var(--radius) - 1px)',
				'elegant-rounded-sm': 'calc(var(--radius) - 2px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'page-loader-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'page-loader-spin': 'page-loader-spin 0.8s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};