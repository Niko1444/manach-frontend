/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'index.html'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			offwhite: '#ffffff',
			green_dark2: '#2C3721',
			green_dark1: '#485935',
			green: '#93A267',
			green_light1: '#C1C9AC',
			green_light2: '#CADBB7',
			green_light3: '#ECF5E1',
			grey_light1: '#D9D9D9',
			grey: '#757575',
			grey_dark1: '#9C9C9C',
			grey_dark2: '#7C7C7C',
			redpink_dark: '#F07167',
		},
		fontSize: {
			h1: '1.875rem', // 30px
			h2: '1.375rem', // 22px
			paragraph: '1.25rem', // 20px
			sm: '0.75rem', // 12px
		},
		plugins: [daisyui],
	},
}
