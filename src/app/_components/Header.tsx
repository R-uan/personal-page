"use client";
import { useState } from "react";
import ColorThemes from "../_scripts/ColorThemes";
import { IoMdClose } from "react-icons/io";
import "../../style/media-queries/header.css";
import { BsThreeDotsVertical } from "react-icons/bs";
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
			<div className="side-bar h-full">
				<button onClick={Handle} className="side-menu-button h-full w-[30px]">
					<BsThreeDotsVertical style={{ fill: "black" }} />
				</button>
				<div
					style={{
						background: "#100F0F",
						right: isMenuOpen ? "0" : "-20vw",
					}}
					className="side-menu absolute gap-[20px] flex flex-col justify-center">
					<button
						onClick={Handle}
						className="close-menu absolute top-[10px] left-[10px] w-5 h-5">
						<IoMdClose />
					</button>
					<div>
						<ul className="flex flex-col gap-[5px] p-[5px]">
							<a href="#home">
								<li className="side-menu-options">Home</li>
							</a>
							<a href="#projects">
								<li className="side-menu-options">Featured Projects</li>
							</a>
							<a href="">
								<li className="side-menu-options">I don't know</li>
							</a>
							<a href="">
								<li className="side-menu-options">Either</li>
							</a>
						</ul>
					</div>
					<div className="test">
						<label htmlFor="theme-selection">
							Select Color Theme:
							<select
								onChange={(event) => HandleThemeChange(event)}
								name="color theme"
								id="theme-selection"
								className="border-[0.1px] border-white w-full rounded-sm h-[4vh] bg-black">
								{AvailableThemes.map((obj, index) => {
									return (
										<option key={index} value={index}>
											{obj.name}
										</option>
									);
								})}
							</select>
						</label>
					</div>
				</div>
				<div
					onClick={Handle}
					style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
					className="absolute left-0 top-0 h-[100vh] w-[100vw] bg-black opacity-35 z-[-10]"></div>
			</div>
		</header>
	);
}
