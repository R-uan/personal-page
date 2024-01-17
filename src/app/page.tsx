"use client";
import Projects from "./_sliders/Projects";
import Home from "./_sliders/Home";
import Repositories2 from "./_sliders/Repositories2";
import { UseSnapPositionContext } from "./_context/SnapPositionContext";
import ContactMe from "./_sliders/ContactMe";

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
			<Projects />
			<Repositories2 />
			<ContactMe />
		</div>
	);
}
