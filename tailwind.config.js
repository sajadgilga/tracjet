module.exports = {
	purge: [ 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html' ],
	theme: {
		extend: {
			spacing: {
				'-1.25': '-0.3125rem',
				'-2.5': '-0.625rem',
				'-3.5': '-0.875rem',
				'-4.5': '-1.125rem',
				0.5: '0.125rem',
				2.5: '0.625rem',
				7: '1.75rem',
				9: '2.25rem',
				13: '3.25rem',
				14: '3.5rem',
				18: '4.5rem',
				28: '7rem',
				36: '9rem',
				52: '13rem',
				72: '18rem',
				128: '32rem',
				content: 'max-content'
			},

			opacity: {
				0.1: '0.1',
				0.9: '0.95'
			},

			borderWidth: {
				0.5: '0.5px',
				1.5: '1.5px'
			},

			// fontFamily: {
			//     'iran-sans': ["'IRANSansWeb'"],
			// },

			fontSize: {
				'2xs': '10px'
			},

			zIndex: {
				'400': 400,
				'500': 500
			},

			maxWidth: {
				'2xs': '16rem'
			},

			minWidth: {
				10: '2.5rem',
				24: '6rem'
			},

			maxHeight: {
				56: '14rem'
			},

			borderRadius: {
				xl: '1rem'
			},

			boxShadow: {
				default: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
				bolden: '0 0 3px 1px rgba(0, 0, 0, 0.16)',
				'inner-lg': 'inset 0 3px 4px 0 rgba(0, 0, 0, 0.16)'
			}
		},
		colors: {
			white: '#FEFCFF',
			black: '#2C3040',
			dark: '#2c3040',
			yellow: '#c7bc1e',
			green: '#1fa141',
			primary: {
				default: '#305df2',
				dark: '#132f8c',
				'light-fade': '#E8EAF155'
			},
			grey: {
				default: '#5a6387',
				white: '#E8EAF1',
				'super-white': '#FAFBFB',
				silver: '#7F7F7F',
				light: '#D3D2CD'
			},
			transparent: 'transparent',
			red: '#B00020'
		}
	},
	variants: {},
	plugins: [ require('tailwindcss'), require('autoprefixer') ]
};
