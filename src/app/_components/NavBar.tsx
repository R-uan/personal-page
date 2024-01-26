"use client";
import { useEffect, useRef, useState } from "react";
import "../../style/media-queries/nav-bar.css";
import { UseSnapPositionContext } from "../_context/SnapPositionContext";
import { UseColorThemeContext } from "../_context/ColorThemeContext";

export default function NavBar() {
	const { SetCurrentPosition, CurrentPosition } = UseSnapPositionContext();
	useEffect(() => {
		SetCurrentPosition!(0);
	}, []);
	const { CurrentTheme } = UseColorThemeContext();
	const Pages = [
		{ name: "Home", _id: "home" },
		{ name: "About Me", _id: "about-me" },
		{ name: "Projects", _id: "projects" },
		{ name: "Contact", _id: "contact" },
	];

	const NavMenu = useRef(null);
	function HandleStuff(event: React.MouseEvent<HTMLButtonElement>, pageIndex: number) {
		const SelectedPage = Pages[pageIndex]._id;
		document.getElementById(SelectedPage)?.scrollIntoView({ behavior: "smooth" });
	}

	const ULStyle = `${CurrentPosition! == 0 ? "text-black bg-[white]" : "text-white bg-[black]"}`;

	return (
		<div className="w-fit h-fit absolute right-[2.5vw] z-50 -translate-y-2/4 top-2/4 items ">
			<ul className="flex flex-col gap-1 w-fit text-2xl items-end">
				{CurrentPosition}
				{Pages.map((page, index) => {
					return (
						<li key={index}>
							<button
								onClick={(event) => {
									HandleStuff(event, index);
								}}
								style={{
									background:
										CurrentPosition == index
											? CurrentTheme.IconBackground
											: CurrentPosition == 0
											? "black"
											: "white",
									color:
										CurrentPosition == index
											? CurrentTheme.RightBackground
											: CurrentPosition == 0
											? "white"
											: "black",
								}}
								className={`${
									CurrentPosition == index ? "nav-option current" : "nav-option"
								} ${ULStyle}`}>
								{page.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
