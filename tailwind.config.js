/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				caveat: ['Caveat', 'sans-serif'],
				['bungee-spice']: ['Bungee Spice', 'sans-serif'],
				['bangers']: ['Bangers', 'sans-serif'],
				['pacifico']: ['Pacifico', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

export default config
