import ProjectRepository from "./ProjectRepository";
import "../../style/media-queries/media-projects.css";
import { UseColorThemeContext } from "../_context/ColorThemeContext";

export default function AboutMePage() {
	const { CurrentTheme } = UseColorThemeContext();
	const tags = ["react", "next", "nodejs", "tailwind", "typescript"];
	return (
		<div
			id="projects"
			className="sliders flex justify-center bg-[#100F0F] gap-[10px] overflow-scroll">
			<div className="experiences mt-[64px] p-2 h-[90vh] flex flex-col gap-3 overflow-scroll">
				<span>
					<h1 style={{ color: CurrentTheme.RightBackground }}>Featured Projects</h1>
				</span>
				<div className="experience-professional items-center pb-5 w-fit h-fit">
					<span className="w-full mb-[2vh]">
						<h1 style={{ color: CurrentTheme.RightBackground }} className="w-m">
							Professional
						</h1>
					</span>
					<div className="repositories">
						<ProjectRepository key={1} />
						<ProjectRepository key={2} />
						<ProjectRepository key={3} />
						<ProjectRepository key={4} />
					</div>
				</div>
				<hr />
				<div className="experience-personal relative w-fit h-fit">
					<span className="w-full mb-[2vh]">
						<h1 style={{ color: CurrentTheme.RightBackground }} className="w-m">
							Personal
						</h1>
					</span>
					<div className="repositories">
						<ProjectRepository key={5} />
						<ProjectRepository key={6} />
						<ProjectRepository key={7} />
						<ProjectRepository key={8} />
					</div>
				</div>
			</div>
		</div>
	);
}
