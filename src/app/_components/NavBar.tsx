"use client";
import { useEffect, useRef, useState } from "react";
import { UseSnapPositionContext } from "../_context/SnapPositionContext";

export default function NavBar() {
	const { SetCurrentPosition, CurrentPosition } = UseSnapPositionContext();
	useEffect(() => {
		SetCurrentPosition!(1);
	}, []);
	const Pages = [
		{ name: "Home", tag: "#home" },
		{ name: "About me", tag: "#about-me" },
		{ name: "Projects", tag: "#repos" },
		{ name: "Contact", tag: "#contact" },
	];

	const NavButton = useRef(null);
	function HandleStuff(event) {
		console.log(event);
	}

	const ULStyle = `[&>*:nth-child(${CurrentPosition ?? 1})]:w-[5vw] ${
		CurrentPosition! % 2 == 0
			? "[&>*]:text-black [&>*]:bg-[white]"
			: "[&>*]:text-white [&>*]:bg-[black]"
	}`;

	return (
		<div className="w-fit h-[20vh] absolute right-[2vw] z-50 -translate-y-2/4 top-2/4 items">
			<ul className={"flex flex-col gap-1 w-fit text-2xl items-end"}>
				<li>{CurrentPosition}</li>
				{Pages.map((tag, index) => {
					return (
						<li key={index + 1} className="">
							<button
								onClick={(event) => {
									HandleStuff(event);
								}}
								ref={NavButton}
								className={`${
									CurrentPosition == index + 1
										? "nav-option current"
										: "nav-option"
								}`}>
								{tag.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
