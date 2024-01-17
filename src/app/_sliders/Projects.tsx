import TestComponent from "./TestComp";
import "../../style/media-queries/media-projects.css";

export default function AboutMePage() {
	const tags = ["react", "next", "nodejs", "tailwind", "typescript"];
	return (
		<div id="about-me" className="sliders flex justify-center bg-[#161616] gap-[40px]">
			<div className="invisible testclass"></div>
			<div className="experiences mt-[64px] p-2 h-[90vh] flex flex-col gap-3 overflow-auto">
				<div className="experience-professional items-center pb-5 w-fit h-fit">
					<span className="text-4xl font-serif w-m">Professional</span>
					<div className="repositories">
						<TestComponent />
					</div>
				</div>
				<div className="experience-personal relative w-fit h-fit">
					<span className="w-full mb-[2vh]">
						<h1 className="text-4xl w-m">Personal Projects</h1>
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
