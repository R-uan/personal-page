"use client";
import { UseSnapPositionContext } from "./SnapPositionContext";

export default function NavBar() {
	const { CurrentPosition } = UseSnapPositionContext();
	const MenuTextColor = "text-[black]";
	const SelectedMenuTextColor = "text-[green]";
	return (
		<div className="w-fit h-[20vh] absolute right-[2vw] z-50 -translate-y-2/4 top-2/4">
			<ul className="flex flex-col gap-1 w-fit">
				<li className={CurrentPosition == 0 ? SelectedMenuTextColor : MenuTextColor}>
					Home
				</li>
				<li className={CurrentPosition == 1 ? SelectedMenuTextColor : MenuTextColor}>
					Repositories
				</li>
				<li className={CurrentPosition == 2 ? SelectedMenuTextColor : MenuTextColor}>
					About me
				</li>
				<li className={CurrentPosition == 0 ? SelectedMenuTextColor : MenuTextColor}>
					Contact
				</li>
			</ul>
		</div>
	);
}
