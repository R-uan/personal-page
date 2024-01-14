import Image from "next/image";
import { BiLogoGit, BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaJava, FaDocker, FaGit } from "react-icons/fa6";
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
		{ name: "Java", icon: <FaJava /> },
		{ name: "React", icon: <SiReact /> },
		{ name: "Express", icon: <SiExpress /> },
		{ name: "Next", icon: <SiNextdotjs /> },
		{ name: "Spring", icon: <SiSpring /> },
		{ name: "MongoDB", icon: <SiMongodb /> },
		{ name: "Postgre", icon: <BiLogoPostgresql /> },
		{ name: "Docker", icon: <FaDocker /> },
		{ name: "Docker", icon: <FaDocker /> },
		/* 	{ name: "Git", icon: <BiLogoGit /> }, */
	];
	return (
		<div
			id="home"
			className="flex flex-row sliders pt-[10vh] relative overflow-hidden bg-[#1e241c]">
			<div className="flex flex-col min-w-[384px] w-[50vw] h-fit ml-[7vw] mt-[15vh] z-40">
				<div className="w-[50vw] h-fit flex flex-col justify-center leading-snug max-md:w-[70vw]">
					<span className="font-mono text-[clamp(17px,2.3vh,40px)] italic ml-1 animate-fadeInLeft animation-delay-100">
						Hi, I am
					</span>
					<h1 className="about-me-text text-[#F6F7C4] text-[clamp(40px,8vh,80px)] font-extralight animate-fadeInLeft animation-delay-200">
						Ruan Lopes.
					</h1>
					<h3 className="text-[clamp(40px,8vh,80px)] text-[#CEDEBD] font-semibold font-mono animate-fadeInLeft animation-delay-300">
						Aspiring Web Developer.
					</h3>
					<p className="w-full text-[clamp(15px,2.5vh,3vh)] animate-fadeInLeft animation-delay-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque
						laborum blanditiis harum voluptate debitis ab voluptatum et at velit aut
						quod dolor impedit doloremque dolorum dignissimos animi fugiat iusto?
					</p>
				</div>
				{/* Technologies */}
				<div className="w-full h-fit flex mt-10">
					<ul className="flex flex-row  w-fit h-fit gap-[7px]">
						{Technologies.map((Tech, index) => {
							return (
								<li
									key={Tech.name}
									className={`tech-icon relative flex justify-center align-middle min-w-[35.5px] min-h-[35.5px] w-[4.5vw] h-[9vh] animate-fadeIn items-center p-[1vh] text-[2.5vw] border-[3px] border-[#181c16] bg-[#131712] animation-delay-500`}>
									{Tech.icon}
									<span
										className={`tech-tooltip absolute left-[-2px] mt-2 min-h-[5px] min-w-[35.5px] w-[4.5vw] text-center border-[#181c16] bg-[#131712]`}>
										{Tech.name}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="absolute w-[20vw] h-[20vw] top-[15vh] bg-black right-[19vw] z-30 outline outline-offset-4 outline-white outline-2 max-md:invisible">
				<img
					src="https://avatars.githubusercontent.com/u/75811206?v=4"
					alt="github profile picture"
					className="h-full w-full"
				/>
			</div>

			<div className="h-[100vh] w-[29vw] absolute bottom-0 right-0 bg-[#F6F7C4] z-10"></div>
			<div className="h-[6vh] w-[100vw] absolute bottom-0 bg-[#0F0F0F] z-20"></div>
		</div>
	);
}
