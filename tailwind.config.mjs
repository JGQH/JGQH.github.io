const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Alegreya Sans"', ...defaultTheme.fontFamily.sans],
				'serif': ['"Spectral SC"', ...defaultTheme.fontFamily.serif]
			}
		},
	},
	plugins: [],
}
