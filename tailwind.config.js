const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	jit: true,
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
		extend: {
			maxWidth: {
				content: '72rem',
			},
			width: {
				scroll: '6px',
			},
			fontSize: {
				md: '15px',
			},
			fontFamily: {
				sans: ['General Sans', ...fontFamily.sans],
				display: ['General Sans', ...fontFamily.sans],
			},
			colors: {
				"inner-core": 'var(--inner-core)',
				"outer-core": 'var(--outer-core)',
				"mantle": 'var(--mantle)',
				"crust": 'var(--crust)',
				"tropo": 'var(--tropo)',
				"strato": 'var(--strato)',
				"meso": 'var(--meso)',
				"thermo": 'var(--thermo)',
				"galaxy": 'var(--galaxy)',
				"text": 'var(--text)',
				"magma": 'var(--magma)',
				"sunset": 'var(--sunset)',
				"nebula": 'var(--nebula)',
			},
			boxShadow: {
				DEFAULT: '0 10px 30px -20px rgba(87, 82, 121, 0.2)',
				lg: '0 10px 40px -15px rgba(87, 82, 121, 0.2)',
			},
			borderColor: (theme) => ({
				DEFAULT: theme('colors.highlight.low', 'currentColor'),
			}),
		},
	},
  plugins: [ require("@tailwindcss/typography"), require("daisyui") ],
  daisyui: {
    themes: [
      {
        lunar: {
          "primary": "#3281ea", // var(--tropo)
          "secondary": "#02bbe8", // var(--thermo)
          "accent": "#0284e8", //var(--strato)
          "neutral": "#252525", // var(--mantle)
          "base-100": "#303030", // var(--crust)
          "info": "#02a3e8", // var(--meso)
          "success": "#05844A", // var(--nebula)
          "warning": "#B10C0C", // var(--magma)
          "error": "#B10C0C", // var(--magma)

          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "2rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
    darkTheme: 'lunar'
  },
}
