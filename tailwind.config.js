const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			gray: colors.gray
		},
		extend: {}
	},
	// variants: { backgroundColor: ['hover'], textColor: ['hover'], borderColor: ['hover']  },
	plugins: [],
	corePlugins: {
		float: false
	}
};
