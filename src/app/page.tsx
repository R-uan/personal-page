"use client";
import Image from "next/image";
import { SiExpress, SiReact, SiNextdotjs, SiMongodb, SiSpring } from "react-icons/si";
import { FaGithub, FaLinkedin, FaNodeJs, FaJava, FaDocker } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Home() {
	const TechnologiesStyle =
		"relative flex items-center p-2 text-4xl border-[3px] border-[#463c9b] bg-[#3B3486]";

	const Thecno = [
		{ name: "Node", icon: <FaNodeJs /> },
		{ name: "Java", icon: <FaJava /> },
		{ name: "React", icon: <SiReact /> },
		{ name: "Express", icon: <SiExpress /> },
		{ name: "Next", icon: <SiNextdotjs /> },
		{ name: "Spring", icon: <SiSpring /> },
		{ name: "MongoDB", icon: <SiMongodb /> },
		{ name: "Postgre", icon: <BiLogoPostgresql /> },
		{ name: "Docker", icon: <FaDocker /> },
	];
	return (
		<>
			<main className="p-5 w-[100%] h-[100vh] relative bg-[#332941]">
				<div className="flex flex-col gap-5 w-fit ml-[10vw] mt-[10vh]">
					<div className="h-fit w-[640px] top-[20vh] left-[10vw] p-2">
						<b>
							<h1 id="main-text-title" className="mb-3 text-5xl text-[#F8E559]">
								Main Text Title Is Quite Big Actually
							</h1>
						</b>
						<p className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
							optio sed dolores sint laudantium sunt. Placeat suscipit corrupti
							aliquam odio laboriosam. Rerum, libero at. Dolorem, consequuntur alias.
							Cupiditate, laboriosam quisquam. Lorem ipsum dolor sit amet consectetur,
							adipisicing elit.
							<br />
							<br />
							Quod fugiat impedit ab dolor nemo quas similique aspernatur itaque?
							Debitis eum veniam corrupti, quia aspernatur est voluptate mollitia modi
							nostrum voluptatem.
						</p>
					</div>
					<div>
						<ul className="h-fit flex flex-row gap-4">
							{Thecno.map((Tech) => {
								return (
									<li className="relative flex items-center p-2 text-4xl border-[3px] border-[#463c9b] bg-[#3B3486]">
										{Tech.icon}
										<span className="absolute left-[-3px] top-full mt-2 text-sm w-[58px] text-center border-[#463c9b] bg-[#3B3486]">
											{Tech.name}
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</main>
		</>
	);
}
