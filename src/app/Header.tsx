export default function Header() {
	return (
		<header className="absolute p-1 flex flex-row relative h-[7vh]">
			<div className="text-3xl left-[12vw] absolute">
				<h1>Logo</h1>
			</div>
			<ul className="flex flex-row gap-5 p-3 w-fit absolute right-[12vw] text-[white]">
				<li>Home</li>
				<li>Repositories</li>
				<li>About me</li>
				<li>Contact</li>
			</ul>
		</header>
	);
}
