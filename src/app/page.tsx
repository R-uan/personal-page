"use client";

import { UIEvent, UIEventHandler, useState } from "react";
import AboutMePage from "./_sliders/AboutMePage";
import LandingPage from "./_sliders/LandingPage";
import Repositories from "./_sliders/Repositories";
import { UseSnapPositionContext } from "./SnapPositionContext";

export default function Home() {
	const { CurrentPosition, SetCurrentPosition } = UseSnapPositionContext();
	function HandleScroll(event: React.UIEvent<HTMLDivElement>) {
		const WindowSize = Math.round(window.innerHeight);
		const CurrentPosition = Math.round(event.currentTarget.scrollTop);
		console.log(event.currentTarget.scrollHeight);
		if (CurrentPosition == 0 && CurrentPosition < WindowSize) {
			SetCurrentPosition!(0);
		} else if (CurrentPosition > 0 && CurrentPosition <= WindowSize) {
			SetCurrentPosition!(1);
		} else if (CurrentPosition <= WindowSize * 2 && CurrentPosition > WindowSize) {
			SetCurrentPosition!(2);
		}
	}
	return (
		<div onScroll={HandleScroll} id="app">
			<LandingPage />
			<AboutMePage />
			<Repositories />
		</div>
	);
}
