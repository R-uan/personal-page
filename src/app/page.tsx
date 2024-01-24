"use client";
import Home from "./_pages/Home";
import Projects from "./_pages/Projects";
import ContactMe from "./_pages/ContactMe";
import MoreAboutMe from "./_pages/MoreAboutMe";
import { UseSnapPositionContext } from "./_context/SnapPositionContext";
import RepositoriesProvider from "./_context/RepositoriesContext";

export default function App() {
	const { SetCurrentPosition } = UseSnapPositionContext();
	function HandleScroll(event: React.UIEvent<HTMLDivElement>) {
		const WindowSize = Math.round(window.innerHeight);
		const CurrentPosition = Math.round(event.currentTarget.scrollTop);
		if (CurrentPosition && SetCurrentPosition) {
			if (CurrentPosition < WindowSize) {
				SetCurrentPosition(0);
			}
			if (CurrentPosition > WindowSize / 2) {
				SetCurrentPosition(1);
			}
			if (CurrentPosition > WindowSize * 1.5) {
				SetCurrentPosition(2);
			}
			if (CurrentPosition > WindowSize * 2.5) {
				SetCurrentPosition(3);
			}
		}
	}
	return (
		<div onScroll={HandleScroll} id="app">
			<Home />
			<RepositoriesProvider>
				<Projects />
			</RepositoriesProvider>
			<MoreAboutMe />
			<ContactMe />
		</div>
	);
}
