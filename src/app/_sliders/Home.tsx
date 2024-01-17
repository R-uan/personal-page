import "../../style/media-queries/media-home.css";
import { BiLogoGit, BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaJava, FaDocker, FaGithub } from "react-icons/fa6";
import {
	SiReact,
	SiExpress,
	SiNextdotjs,
	SiSpring,
	SiMongodb,
	SiTailwindcss,
} from "react-icons/si";

export default function LandingPage() {
	const Technologies = [
		{ name: "Node", icon: <FaNodeJs /> },
		{ name: "React", icon: <SiReact /> },
		{ name: "Express", icon: <SiExpress /> },
		{ name: "Next", icon: <SiNextdotjs /> },
		{ name: "Tailwind", icon: <BiLogoTailwindCss /> },
		{ name: "Java", icon: <FaJava /> },
		{ name: "Spring", icon: <SiSpring /> },
		{ name: "MongoDB", icon: <SiMongodb /> },
		{ name: "Postgre", icon: <BiLogoPostgresql /> },
		{ name: "Docker", icon: <FaDocker /> },
	];

	return (
		<div
			id="home"
			className="flex flex-row sliders pt-[7vh] relative overflow-hidden bg-[#1e241c]">
			<div className="landing-child-1 flex flex-col w-[clamp(728px,50vw,50vw)] h-fit ml-[7vw] mt-[10vh] z-4">
				<div className="landing-child-2 w-[clamp(468px,50vw,50vw)] h-fit flex flex-col justify-center leading-snug">
					<span className="w-fit ml-1 font-mono text-[clamp(17px,2.3vh,2.3vh)] italic animate-fadeInLeft animation-delay-100">
						Hi, I am
					</span>
					<h1 className="font-systemui font-thin mb-[-15px] w-fit -mt-2.5 text-[#F6F7C4] text-[clamp(40px,8vh,80px)] animate-fadeInLeft animation-delay-200">
						Ruan Lopes.
					</h1>
					<h3 className="w-fit text-[clamp(40px,8vh,80px)] text-[#CEDEBD] font-semibold font-mono animate-fadeInLeft animation-delay-300">
						Aspiring Web Developer.
					</h3>
					<p className="w-full min-h-[152px] text-[clamp(15px,2.5vh,3vh)] animate-fadeInLeft animation-delay-400">
						I have a passion for creating innovative and user-friendly digital
						experiences. Eager to learn and grow in the ever-evolving world of web
						development, I am dedicated to mastering various technologies and staying
						abreast of industry trends.
					</p>
				</div>
				{/* Technologies */}
				<div className="w-full h-fit flex mt-4 mobile:mt-[2vh] tablet:mt-3">
					<ul className="technologies flex flex-row w-fit h-fit gap-[7px] mobile:grid-cols-5 mobile:grid mobile:gap-y-2 tablet:grid tablet:grid-cols-5 tablet:gap-y-9 mobile:gap-7">
						{Technologies.map((Tech, index) => {
							return (
								<li
									key={Tech.name}
									className="tech-icon flex relative justify-center align-middle w-[clamp(40px,87px,87px)] h-[clamp(50px,87px,87px)] items-center p-[1vh] text-[2.5rem] border-[3px] border-[#181c16] bg-[#131712] z-30 animate-fadeIn animation-delay-500">
									{Tech.icon}
									<span className="tech-tooltip top-full absolute left-[-2px] mt-2 w-[clamp(50px,87px,87px)] text-center border-[#181c16] bg-[#131712]">
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

			<div className="yellow-part h-[100vh] w-[29vw] absolute bottom-0 right-0 bg-[#F6F7C4] z-10"></div>
			{/* BOTTOM BAR IS THIS ONE \/ */}
			<div className="landing-footer h-[clamp(30px,6vh,6vh)] w-[100vw] flex items-center absolute bottom-0 bg-[#161616] z-20">
				<div className="m-1 ml-3 mr-2 h-max w-[4vh]">
					<FaGithub size="3vh" />
				</div>
				<span>R-uan</span>
			</div>
		</div>
	);
}
