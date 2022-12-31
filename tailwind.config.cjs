/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'magenta-cerise': '#DA1D7E',
				'yellow-beer': '#F8B725',
				'bluish-purple': '#885EDD',
				'green-carribean': '#23C8A0'
			},
			boxShadow: {
				brutalist: '4px 4px #000'
			},
			aspectRatio: {
				'21/9': '21 / 9',
				'21/3': '21 / 3',
				'2/3': '2 / 3'
			},
			transitionProperty: {
				height: 'height'
			}
		}
	},
	plugins: []
};
