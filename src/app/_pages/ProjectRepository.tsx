import { UseColorThemeContext } from "../_context/ColorThemeContext";
import { FaExternalLinkAlt } from "react-icons/fa";
import IRepositories from "../_scripts/IRepositories";

export default function Repository({ RepositoryData }: { RepositoryData: IRepositories }) {
	const { CurrentTheme } = UseColorThemeContext();
	let { title, topics } = RepositoryData;

	function capitalizeFirstLetter(word: string) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<div className="repository flex flex-col min-h-[225px] h-fit w-max">
			<a href={RepositoryData.url} target="_blank">
				<span
					style={{ color: CurrentTheme.Heading2 }}
					className="text-4xl flex gap-[5px] text-[#d0d0d0] font-semibold mb-[5px] items-baseline">
					{title.toLowerCase().split("-").map(capitalizeFirstLetter).join(" ")}
					<FaExternalLinkAlt size={15} style={{ fill: CurrentTheme.Heading2 }} />
				</span>
			</a>

			<p className="text-[#F4EAE0] mb-[1.5vh]">{RepositoryData.description}</p>
			<ul className="flex gap-1 repo-tags flex-wrap">
				{RepositoryData.topics.map((tag, index) => {
					return (
						<li
							key={index}
							style={{
								background: CurrentTheme.IconBackground,
								color: CurrentTheme.Paragraph,
							}}
							className="p-3 pt-1 pb-1 w-fit text-2xl rounded-2xl">
							{capitalizeFirstLetter(tag)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
