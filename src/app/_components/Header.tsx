"use client";
import { useState } from "react";
import SideMenu from "./SideMenu";
import "../../style/media-queries/header.css";
import ColorThemes from "../_scripts/ColorThemes";
import makeGraphqlRequest from "../_scripts/FetchRepositories";
import { UseColorThemeContext } from "../_context/ColorThemeContext";

export default function Header() {
	const { CurrentTheme, SetCurrentTheme } = UseColorThemeContext();
	const [isMenuOpen, setMenu] = useState(false);

	function Handle() {
		isMenuOpen ? setMenu(false) : setMenu(true);
	}

	const AvailableThemes = Object.entries(ColorThemes).map(([name, theme]) => ({
		name,
		theme,
	}));

	function HandleThemeChange(event: React.ChangeEvent<HTMLSelectElement>) {
		const SelectedThemeIndex: number = parseInt(event.target.value);
		const SelectedTheme = AvailableThemes[SelectedThemeIndex].theme;
		SetCurrentTheme(SelectedTheme);
	}
	return (
		<header className="flex items-center absolute w-[100vw] flex-row h-[8vh] z-50">
			<div className="header-logo">
				<h1 id="header-logo">LOGO</h1>
			</div>
			<SideMenu />
		</header>
	);
}
