/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#2C2C2C",
				secondary: "#6D6D6D"
			},
			fontFamily: {
				lora: ['"Lora"', 'serif'],
				keania: ['"Keania One"', 'cursive']
			},
			height: {
				'screen': [
					'100vh', '100dvh'
				]
			},
			minHeight: {
				'screen': [
					'100vh', '100dvh'
				]
			},
		},
	},
	plugins: [],
}
