"use client";
import { useEffect, useRef, useState } from "react";
import { UseSnapPositionContext } from "../_context/SnapPositionContext";

export default function NavBar() {
	const { SetCurrentPosition, CurrentPosition } = UseSnapPositionContext();
	useEffect(() => {
		SetCurrentPosition!(0);
	}, []);
	const Pages = [
		{ name: "Home", _id: "home" },
		{ name: "About me", _id: "about-me" },
		{ name: "Projects", _id: "repos" },
		{ name: "Contact", _id: "contact" },
	];

	const NavMenu = useRef(null);
	function HandleStuff(event: React.MouseEvent<HTMLButtonElement>, pageIndex: number) {
		const SelectedPage = Pages[pageIndex]._id;
		document.getElementById(SelectedPage)?.scrollIntoView({ behavior: "smooth" });
	}

	const ULStyle = `${
		CurrentPosition! % 2 == 1 ? "text-black bg-[white]" : "text-white bg-[black]"
	}`;

	return (
		<div className="w-fit h-fit absolute right-[2vw] z-50 -translate-y-2/4 top-2/4 items">
			<ul className={"flex flex-col gap-1 w-fit text-2xl items-end"}>
				{Pages.map((page, index) => {
					return (
						<li key={index}>
							<button
								onClick={(event) => {
									HandleStuff(event, index);
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
