import Image from "next/image";
import footer from "@/public/footer.svg";
import "../../style/media-queries/media-home.css";
import { UseColorThemeContext } from "../_context/ColorThemeContext";
import { FaNodeJs, FaJava, FaDocker, FaGithub } from "react-icons/fa6";
import { BiLogoGit, BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { SiReact, SiExpress, SiNextdotjs, SiSpring, SiMongodb } from "react-icons/si";

export default function Home() {
	const { CurrentTheme, SetCurrentTheme } = UseColorThemeContext();
	const Technologies = [
		{ name: "Java", icon: <FaJava /> },
		{ name: "Node", icon: <FaNodeJs /> },
		{ name: "React", icon: <SiReact /> },
		{ name: "Spring", icon: <SiSpring /> },
		{ name: "Docker", icon: <FaDocker /> },
		{ name: "Next", icon: <SiNextdotjs /> },
		{ name: "Express", icon: <SiExpress /> },
		{ name: "MongoDB", icon: <SiMongodb /> },
		{ name: "Postgre", icon: <BiLogoPostgresql /> },
		{ name: "Tailwind", icon: <BiLogoTailwindCss /> },
	];
	return (
		<div
			style={{ backgroundColor: `${CurrentTheme.LeftBackground}` }}
			id="home"
			className="flex flex-row sliders pt-[7vh] relative overflow-hidden">
			<div className="landing-child-1 flex flex-col w-[clamp(728px,50vw,50vw)] h-fit ml-[7vw] mt-[10vh] z-4 ">
				<div className="landing-child-2 w-[clamp(468px,50vw,50vw)] h-fit flex flex-col justify-center leading-snug ">
					<span className="w-fit mb-[3px] leading-3 ml-1 font-mono text-[clamp(17px,2.3vh,2.3vh)] italic animate-fadeInLeft animation-delay-100">
						Hi, I am
					</span>
					<h1
						style={{ color: `${CurrentTheme.Heading1}` }}
						className="font-systemui  font-thin mb-[5px] w-fit -mt-2.5 text-[clamp(40px,8vh,80px)] animate-fadeInLeft leading-[1] animation-delay-200">
						Ruan Lopes.
					</h1>
					<h3
						style={{ color: `${CurrentTheme.Heading2}` }}
						className="w-fit text-[clamp(40px,8vh,80px)] font-semibold leading-[1] font-mono animate-fadeInLeft animation-delay-300">
						Aspiring Web Developer.
					</h3>
					<p
						style={{ color: `${CurrentTheme.Paragraph}` }}
						className="w-full min-h-fit text-[clamp(15px,2.5vh,3vh)] animate-fadeInLeft animation-delay-400">
						I'm a 22 years old brazilian with a passion for creating innovative and
						user-friendly digital experiences. Eager to learn and grow in the
						ever-evolving world of web development, I am dedicated to mastering various
						technologies and always catching up with industry trends.
					</p>
				</div>
				<hr />
				{/* Technologies */}
				<div className="technologies-parent w-full h-fit flex mt-4 mobile:mt-[2vh] tablet:mt-3">
					<ul className="technologies flex flex-row w-fit h-fit gap-[7px] mobile:grid-cols-5 mobile:grid mobile:gap-y-2 tablet:grid tablet:grid-cols-5 tablet:gap-y-9 mobile:gap-7">
						{Technologies.map((Tech, index) => {
							return (
								<li
									style={{
										background: `${CurrentTheme.IconBackground}`,
										borderColor: `${CurrentTheme.IconBorder}`,
									}}
									key={Tech.name}
									className="tech-icon flex relative justify-center align-middle w-[clamp(40px,87px,87px)] h-[clamp(50px,87px,87px)] items-center p-[1vh] text-[2.5rem] border-[1px] z-30 animate-fadeIn animation-delay-500">
									{Tech.icon}
									<span
										style={{
											background: `${CurrentTheme.IconBackground}`,
											borderColor: `${CurrentTheme.IconBorder}`,
										}}
										className="tech-tooltip top-full absolute left-[-2px] mt-2 w-[clamp(50px,87px,87px)] text-center border-[1px]">
										{Tech.name}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="gh-pfp absolute w-[20vw] h-[20vw] top-[15vh] bg-black right-[19vw] z-30 outline outline-offset-4 outline-white outline-2 animate-fadeIn animation-delay-500">
				<img
					src="https://avatars.githubusercontent.com/u/75811206?v=4"
					alt="github profile picture"
					className="h-full w-full"
				/>
			</div>

			<div
				style={{ background: `${CurrentTheme.RightBackground}` }}
				className="yellow-part h-[100vh] w-[29vw] absolute bottom-0 right-0 z-10"></div>
			{/* BOTTOM BAR IS THIS ONE \/ */}
			<div className="landing-footer w-[100vw] flex items-center absolute bottom-0 z-20">
				<Image alt="footer" src={footer} className="w-full "></Image>
			</div>
		</div>
	);
}
