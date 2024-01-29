import ProjectRepository from "../_components/ProjectRepository";
import "../../style/media-queries/media-projects.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { UseColorThemeContext } from "../_context/ColorThemeContext";
import { useRepositoriesContext } from "../_context/RepositoriesContext";

export default function Projects() {
	const { CurrentTheme } = UseColorThemeContext();
	const { Repositories } = useRepositoriesContext();
	const tags = ["react", "next", "nodejs", "tailwind", "typescript"];
	return (
		<div id="projects" className="sliders bg-[#100F0F]">
			<div className="main-box-projects">
				<span style={{ color: CurrentTheme.RightBackground }}>Featured Projects</span>
				{Repositories ? (
					<div className="repositories">
						{Repositories?.map((Repository, Index) => {
							return <ProjectRepository RepositoryData={Repository} key={Index} />;
						})}
					</div>
				) : (
					<div className="loading w-full h-full flex justify-center items-center">
						<span className="animate-spin">
							<AiOutlineLoading3Quarters size={40} />
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
