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
		/* 	{ name: "Git", icon: <BiLogoGit /> }, */
	];

	return (
		<div id="home" className="flex flex-row sliders relative overflow-hidden bg-[#1B4242]">
			<div className="flex flex-col min-w-[384px] w-[45vw] h-fit ml-[10vw] mt-[5vh] z-40">
				<div className="w-full h-full p-1">
					<b>
						<h1
							id="main-text-title"
							className="mb-3 text-[6.4vh] leading-tight text-[#d9c84d]">
							Aspiring
							<br />
							Web Developer
						</h1>
					</b>
					<p className=" text-justify text-[2.2vh]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio
						sed dolores sint laudantium sunt. Placeat suscipit corrupti aliquam odio
						laboriosam. Rerum, libero at. Dolorem, consequuntur alias. Cupiditate,
						laboriosam quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
						<br />
						<br />
						Quod fugiat impedit ab dolor nemo quas similique aspernatur itaque? Debitis
						eum veniam corrupti, quia aspernatur est voluptate mollitia modi nostrum
						voluptatem.
					</p>
				</div>
				{/* Technologies */}
				<div className="w-full h-fit flex justify-center">
					<ul className="flex flex-row  w-fit h-fit m-1 gap-[0.5vw]">
						{Technologies.map((Tech) => {
							return (
								<li
									key={Tech.name}
									className="group relative flex justify-center align-middle min-w-[35.5px] min-h-[35.5px] w-[4.5vw] h-[9vh] items-center p-[1vh] text-[2.5vw] border-[3px] border-[#424769] bg-[#2D3250] this-is-the-span-class">
									{Tech.icon}
									<span className="absolute left-[-2px] mt-2 min-h-[5px] min-w-[35.5px] w-[4.5vw] text-center border-[#424769] bg-[#2D3250] lmaoxd">
										{Tech.name}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="absolute w-[300px] h-[300px] bg-black right-[19vw] z-30 outline outline-offset-4 outline-white outline-2">
				<img
					src="https://avatars.githubusercontent.com/u/75811206?v=4"
					alt="github profile picture"
					className="h-full w-full"
				/>
			</div>

			<div className="h-[100vh] w-[29vw] absolute bottom-0 right-0 bg-[#d9c84d] z-10"></div>
			<div className="h-[6vh] w-[100vw] absolute bottom-0 bg-[#0F0F0F] z-20"></div>
		</div>
	);
}
