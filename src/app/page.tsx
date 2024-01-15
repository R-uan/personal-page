"use client";
import AboutMePage from "./_sliders/AboutMePage";
import LandingPage from "./_sliders/LandingPage";
import Repositories from "./_sliders/Repositories";
import { UseSnapPositionContext } from "./_context/SnapPositionContext";
import ContactMe from "./_sliders/ContactMe";
import "./mobile.css";

export default function Home() {
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
			<LandingPage />
			<AboutMePage />
			<Repositories />
			<ContactMe />
		</div>
	);
}
