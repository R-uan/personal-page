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
		{ name: "Node", icon: <FaNodeJs size="5vh" /> },
		{ name: "Java", icon: <FaJava /> },
		{ name: "React", icon: <SiReact /> },
		{ name: "Express", icon: <SiExpress /> },
		{ name: "Next", icon: <SiNextdotjs /> },
		{ name: "Spring", icon: <SiSpring /> },
		{ name: "MongoDB", icon: <SiMongodb /> },
		{ name: "Postgre", icon: <BiLogoPostgresql /> },
		{ name: "Docker", icon: <FaDocker /> },
		{ name: "Git", icon: <BiLogoGit /> },
	];
	/* bg-[linear-gradient(45deg,#332941,#3B3486)] */
	/* bg-gradient-to-r from-[#332941] to-[#3B3486] */
	return (
		<div className="flex flex-row sliders relative overflow-hidden bg-[#1B4242]">
			<div className="flex flex-col min-w-[384px] w-[45vw] h-fit ml-[10vw] mt-[5vh] z-40">
				<div className="w-full h-full p-1">
					<b>
						<h1
							id="main-text-title"
							className="mb-3 text-[6.4vh] leading-tight text-[#d9c84d]">
							Main Text Title Is Quite Big Actually
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
				<ul className="flex flex-row w-fit h-fit m-1 gap-[0.5vw]">
					{Technologies.map((Tech) => {
						return (
							<li className="relative flex min-w-[35.5px] min-h-[35.5px] w-[4vw] h-[4vw] items-center p-[1vh] text-[5vh] border-[3px] border-[#463c9b] bg-[#3B3486]">
								{Tech.icon}
								<span className="absolute left-[-3px] top-full mt-2 text-[0.8vw] min-h-[5px] min-w-[35.5px] w-[4vw] text-center border-[#463c9b] bg-[#3B3486]">
									{Tech.name}
								</span>
							</li>
						);
					})}
				</ul>
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
