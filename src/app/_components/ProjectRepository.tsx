import { FaExternalLinkAlt } from "react-icons/fa";
import IRepositories from "../_scripts/IRepositories";
import { UseColorThemeContext } from "../_context/ColorThemeContext";

export default function Repository({ RepositoryData }: { RepositoryData: IRepositories }) {
	const { CurrentTheme } = UseColorThemeContext();
	let { name, topics } = RepositoryData;

	function capitalizeFirstLetter(word: string) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	return (
		<div className="repository">
			<a href={RepositoryData.url} target="_blank">
				<span style={{ color: CurrentTheme.Heading2 }}>
					{name.split("-").join(" ")}
					<FaExternalLinkAlt size={15} style={{ fill: CurrentTheme.Heading2 }} />
				</span>
			</a>
			<p style={{ color: CurrentTheme.Paragraph }}>{RepositoryData.description}</p>
			<ul className="repository-tags">
				{RepositoryData.topics.map((tag, index) => {
					return (
						<li
							key={index}
							style={{
								background: CurrentTheme.IconBackground,
								color: CurrentTheme.Paragraph,
							}}>
							{capitalizeFirstLetter(tag)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
