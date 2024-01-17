"use client";
export default function Header() {
	return (
		<header className="flex mobile:justify-center items-center mobile:left-0 absolute w-[100vw] left-[7vw] mt-2 flex-row h-[8vh] z-50">
			<div className="text-3xl absolute">
				<h1 id="header-logo">LOGO</h1>
			</div>
		</header>
	);
}
