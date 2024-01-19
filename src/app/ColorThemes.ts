export interface Theme {
	LeftBackground: string;
	RightBackground: string;
	Heading1: string;
	Heading2: string;
	Paragraph: string;
	IconBackground: string;
	IconBorder: string;
}

export default class ColorThemes {
	static Default: Theme = {
		Heading1: "#F6F7C4" /* Pale Green */,
		Heading2: "#CEDEBD" /* Pale Green */,
		Paragraph: "#FAFAFA" /* White */,
		IconBorder: "#FAFAFA" /* White */,
		IconBackground: "#4F6F52" /* Dark Green */,
		LeftBackground: "#1E241C" /* Light Green */,
		RightBackground: "#F6F7C4" /* Pale Yellow */,
	};

	static Cyberpunk2077: Theme = {
		Heading1: "#FF003C" /* Red */,
		Heading2: "#00F0FF" /* Light Blue */,
		Paragraph: "#FAFAFA" /* White */,
		IconBorder: "#FAFAFA" /* White */,
		IconBackground: "#FF003C" /* Red */,
		LeftBackground: "#050A0E" /* Dark Blue */,
		RightBackground: "#FCEE09" /* Yellow */,
	};

	private EMPTY: Theme = {
		Heading1: "",
		Heading2: "",
		Paragraph: "",
		IconBorder: "",
		IconBackground: "",
		LeftBackground: "",
		RightBackground: "",
	};
}
