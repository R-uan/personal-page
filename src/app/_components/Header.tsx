"use client";
import { UseSnapPositionContext } from "../_context/SnapPositionContext";

export default function Header() {
	const { CurrentPosition } = UseSnapPositionContext();
	const MenuTextColor = "text-[black]";
	const SelectedMenuTextColor = "text-[green]";
	return (
		<header className="absolute top-1 flex flex-row h-[7vh] w-[100%] z-50">
			<div className="text-3xl left-[12vw] absolute">
				<h1 id="header-logo">LOGO</h1>
			</div>
		</header>
	);
}
