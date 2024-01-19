"use client";
import ColorThemes, { Theme } from "../ColorThemes";
import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ColorThemeContextInterface {
	CurrentTheme: Theme;
	SetCurrentTheme: React.Dispatch<SetStateAction<Theme>>;
}

const ColorThemeContext = createContext<ColorThemeContextInterface | null>(null);

export default function ColorThemeProvider({ children }: { children: ReactNode }) {
	const [CurrentTheme, SetCurrentTheme] = useState<Theme>(ColorThemes.Default);
	return (
		<ColorThemeContext.Provider value={{ CurrentTheme, SetCurrentTheme }}>
			{children}
		</ColorThemeContext.Provider>
	);
}

export function UseColorThemeContext() {
	const Context = useContext(ColorThemeContext);
	if (Context == null) throw new Error("Something went wrong. T53M1");
	return Context;
}
