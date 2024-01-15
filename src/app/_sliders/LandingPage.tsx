import Image from "next/image";
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
			<div className="flex flex-col w-[clamp(500px,50vw,50vw)] h-fit ml-[7vw] mt-[10vh] z-40 mobile:w-[80vw] mobile:mt-[10px] tablet:mt-[10px]">
				<div className="w-[clamp(468px,50vw,50vw)] h-fit flex flex-col justify-center leading-snug">
					<span className="font-mono w-fit text-[clamp(17px,2.3vh,40px)] italic ml-1 animate-fadeInLeft animation-delay-100">
						Hi, I am
					</span>
					<h1 className="font-systemui font-thin mb-[-15px] w-fit -mt-2.5 text-[#F6F7C4] text-[clamp(40px,8vh,80px)] animate-fadeInLeft animation-delay-200 mobile:text-[50px]">
						Ruan Lopes.
					</h1>
					<h3 className="about-me-text w-fit text-[clamp(40px,8vh,80px)] text-[#CEDEBD] font-semibold font-mono animate-fadeInLeft animation-delay-300 mobile:text-[48px]">
						Aspiring Web Developer.
					</h3>
					<p className="w-full min-h-[152px] text-[clamp(15px,2.5vh,3vh)] animate-fadeInLeft animation-delay-400 mobile:h-[152px] mobile:overflow-auto mobile:w-[80vw] tablet:h-[152px] tablet:overflow-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque
						laborum blanditiis harum voluptate debitis ab voluptatum et at velit aut
						quod dolor impedit doloremque dolorum dignissimos animi fugiat iusto? Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum commodi
						dolor obcaecati sapiente similique hic nihil rem, provident omnis cupiditate
						harum veniam quia cum. Porro ad eveniet eaque sint?
					</p>
				</div>
				{/* Technologies */}
				<div className="w-full h-fit flex mt-4 mobile:mt-7 tablet:mt-3">
					<ul className="flex flex-row w-fit h-fit gap-[7px] mobile:grid-cols-5 mobile:grid mobile:gap-y-9 tablet:grid tablet:grid-cols-5 tablet:gap-y-9">
						{Technologies.map((Tech, index) => {
							return (
								<li
									key={Tech.name}
									className={`tech-icon relative flex justify-center align-middle w-[clamp(50px,70px,70px)] h-[clamp(50px,70px,70px)] animate-fadeIn items-center p-[1vh] text-[2.5rem] border-[3px] border-[#181c16] bg-[#131712]  animation-delay-500`}>
									{Tech.icon}
									<span
										className={`tech-tooltip absolute left-[-2px] mt-2 w-[clamp(50px,70px,70px)] text-center border-[#181c16] bg-[#131712]`}>
										{Tech.name}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="absolute w-[20vw] h-[20vw] top-[15vh] bg-black right-[19vw] z-30 outline outline-offset-4 outline-white outline-2 animate-fadeIn animation-delay-500 mobile:invisible tablet:w-[250px] tablet:h-[250px] tablet:right-[7vw]">
				<img
					src="https://avatars.githubusercontent.com/u/75811206?v=4"
					alt="github profile picture"
					className="h-full w-full"
				/>
			</div>

			<div className="h-[100vh] w-[29vw] absolute bottom-0 right-0 bg-[#F6F7C4] z-10 mobile:invisible"></div>
			{/* BOTTOM BAR IS THIS ONE \/ */}
			<div className="h-[clamp(30px,6vh,6vh)] w-[100vw] flex items-center absolute bottom-0 bg-[#0F0F0F] z-20 mobile:h-[30px] tablet:h-[30px]">
				<div className="m-1 ml-3 mr-2 h-max w-[4vh]">
					<FaGithub size="3vh" />
				</div>
				<span>R-uan</span>
			</div>
		</div>
	);
}
