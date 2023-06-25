/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#0e1624",
				customBlue: "#00dbd8",
				customPurple: "#b133ff",
			},
			fontFamily: {
				default: ["Roboto", "Helvetica", "Arial", "sans-serif"],
				grotesque: ["Darker Grotesque", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			keyframes: {
				fadeInLeft: {
					"0%": {
						transform: "translate(-50%,0)",
						opacity: "0%",
					},
					"100%": {
						transform: "translate(0,0)",
						opacity: "100%",
					},
				},
				fadeInRight: {
					"0%": {
						transform: "translate(50%,0)",
						opacity: "0%",
					},
					"100%": {
						transform: "translate(0,0)",
						opacity: "100%",
					},
				},
				slideInRight: {
					"0%": {
						transform: "translate(50%,0)",
					},
					"100%": {
						transform: "translate(0,0)",
					},
				},
				fadeIn: {
					"0%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
			},
			animation: {
				fadeInLeft: "fadeInLeft 1s ease-in-out",
				fadeInRight: "fadeInRight 1s ease-in-out",
				slideInRight: "slideInRight 0.5s ease-in-out",
				fadeIn: "fadeIn 1s ease-in",
			},
		},
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"animation-delay": (value) => {
						return {
							"animation-delay": value,
						};
					},
				},
				{
					values: theme("transitionDelay"),
				}
			);
		}),
	],
};
