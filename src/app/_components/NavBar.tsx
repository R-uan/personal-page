"use client";
import { useEffect, useRef, useState } from "react";
import { UseSnapPositionContext } from "../_context/SnapPositionContext";

export default function NavBar() {
	const { SetCurrentPosition, CurrentPosition } = UseSnapPositionContext();
	const Pages = [
		{ name: "Home", tag: "#home" },
		{ name: "About me", tag: "#about-me" },
		{ name: "Projects", tag: "#repos" },
		{ name: "Contact", tag: "#contact" },
	];

	const lindo = `rounded-full flex justify-center align-middle w-[2vw] h-[2vh] 
	hover:w-[6vw] 
	hover:h-[3vh]
	transition-all 
	duration-[0.3s]`;

	const linda = `h-full w-full flex items-center justify-start ml-1 text-[0] 
	hover:text-[1vw] 
	hover:duration-[0.5s]
	hover:transition-[font-size] `;

	const ULStyle = `
	[&>*:nth-child(${CurrentPosition})]:w-[5vw]
	${
		CurrentPosition! % 2 == 0
			? "[&>*]:text-black [&>*]:bg-[white]"
			: "[&>*]:text-white [&>*]:bg-[black]"
	}`;

	return (
		<div className="w-fit h-[20vh] absolute right-[2vw] z-50 -translate-y-2/4 top-2/4 items">
			<ul className={"flex flex-col gap-1 w-fit text-2xl items-end  " + ULStyle}>
				{Pages.map((tag) => {
					return (
						<li className={lindo}>
							<a href={tag.tag} className={linda}>
								{tag.name}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
