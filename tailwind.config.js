/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"regal-blue": "#243c5a",
				Navy: "#0a192f",
				"Light-Navy": "#112240",
				"Lightest-Navy": "#233554",
				Slate: "#8892b0",
				"Light-Slate": "#a8b2d1",
				"Lightest-Slate": "#ccd6f6",
				White: "#e6f1ff",
				Green: "#64ffda",
			},
		},
		fontFamily: {
			SFMono: ["SFMono", "ui-sans-serif", "system-ui"],
		},
	},
	plugins: [],
};
