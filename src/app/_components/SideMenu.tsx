import { UseColorThemeContext } from "../_context/ColorThemeContext";
import ColorThemes from "../_scripts/ColorThemes";
import "../../style/media-queries/side-menu.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function SideMenu() {
	const { CurrentTheme, SetCurrentTheme } = UseColorThemeContext();
	const [isMenuOpen, setMenu] = useState(false);
	const isDesktop = useMediaQuery({ query: "(min-width: 1260px)" });
	const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

	function VerifyMediaQuery() {
		if (isDesktop) return "clamp(-20vw, -20vw, -150px)";
		if (isTablet) return "-60vw";
		return "-100vw";
	}

	function Handle() {
		isMenuOpen ? setMenu(false) : setMenu(true);
		console.log(isDesktop);
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
		<>
			<button onClick={Handle} className="open-menu h-full w-[30px]">
				<BsThreeDotsVertical style={{ fill: CurrentTheme.IconBackground }} />
			</button>
			<div className="side-bar h-full">
				<div
					style={{
						background: "#100F0F",
						right: isMenuOpen ? "0" : VerifyMediaQuery(),
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
					<div className="theme-selection">
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
		</>
	);
}
