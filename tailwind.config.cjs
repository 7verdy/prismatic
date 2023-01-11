module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxHeight: {
				'1/2': '50%',
			  },
			fontFamily: {
				asgard: ['Asgard']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};