import { UIEventHandler, useRef, useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaJava, FaDocker } from "react-icons/fa6";
import { SiReact, SiExpress, SiNextdotjs, SiSpring, SiMongodb } from "react-icons/si";

export default function AboutMePage() {
	return (
		<div
			id="about-me"
			className="sliders flex justify-center items-center pt-0 bg-[#0F0F0F] pl-5 gap-5">
			<div className="outline outline-2 outline-red-600 w-[80vw] h-[80vh] flex flex-col justify-center leading-snug">
				<span className="font-mono text-[clamp(17px,2.3vh,40px)] italic ml-1 animate-fadeIn animation-delay-100">
					Hi, I am
				</span>
				<h1 className="about-me-text text-[clamp(40px,8vh,80px)] font-extralight animate-fadeIn animation-delay-200">
					Ruan Lopes.
				</h1>
				<h3 className="text-[clamp(40px,8vh,80px)] font-semibold font-mono animate-fadeIn animation-delay-300">
					Aspiring Web Developer.
				</h3>
				<p className="w-[50vw] text-[clamp(15px,2.5vh,3vh)] animate-fadeIn animation-delay-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cumque laborum
					blanditiis harum voluptate debitis ab voluptatum et at velit aut quod dolor
					impedit doloremque dolorum dignissimos animi fugiat iusto?
				</p>
			</div>
		</div>
	);
}
