import TestComponent from "./TestComp";
import "../../style/media-queries/media-projects.css";

export default function AboutMePage() {
	const tags = ["react", "next", "nodejs", "tailwind", "typescript"];
	return (
		<div id="about-me" className="sliders flex justify-center bg-[#100F0F] gap-[10px]">
			<div className="experiences mt-[64px] p-2 h-[90vh] flex flex-col gap-3 overflow-auto">
				<span>
					<h1>Featured Projects</h1>
				</span>
				<div className="experience-professional items-center pb-5 w-fit h-fit">
					<span className="w-full mb-[2vh]">
						<h1 className="w-m">Professional</h1>
					</span>
					<div className="repositories">
						<TestComponent />
						<TestComponent />
						<TestComponent />
						<TestComponent />
					</div>
				</div>
				<hr />
				<div className="experience-personal relative w-fit h-fit">
					<span className="w-full mb-[2vh]">
						<h1 className="w-m">Personal</h1>
					</span>
					<div className="repositories">
						<TestComponent />
						<TestComponent />
						<TestComponent />
						<TestComponent />
					</div>
				</div>
			</div>
		</div>
	);
}
