import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			screens: {
				mobile: { min: "481px", max: "767px" },
				tablet: { min: "768px", max: "1024px" },
				// => @media (max-width: 558px) { ... }
				md: { max: "768px" },
			},
			animation: {
				fadeInLeft: "fadeInLeft 1.5s ease 1",
				fadeIn: "fadeIn 1.5s ease 1",
			},
			keyframes: {
				fadeInLeft: {
					"0%": { transform: "translateY(30%)", opacity: "0%" },
					"100%": { transform: "translateY(0)", opacity: "100%" },
				},
				fadeIn: {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("tailwindcss-animation-delay")],
};
export default config;
