import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { SiCodewars } from "react-icons/si";

export function ProfessionalSocialMedia() {
	const Socials = [
		{ icon: <IoLogoGithub />, url: "https://github.com/R-uan" },
		{ icon: <SiCodewars />, url: "https://www.codewars.com/users/R-uan" },
		{ icon: <IoLogoLinkedin />, url: "https://www.linkedin.com/in/ruan-lopes-12041b1bb/" },
	];
	return (
		<>
			{Socials.map((social, index) => {
				return (
					<a key={index} href={social.url} target="_blank">
						<span className="text-[2rem]">{social.icon}</span>
					</a>
				);
			})}
		</>
	);
}

export function PersonalSocialMedia() {
	const Socials = [
		{ icon: <IoLogoGithub />, url: "https://github.com/R-uan" },
		{ icon: <SiCodewars />, url: "https://www.codewars.com/users/R-uan" },
		{ icon: <IoLogoLinkedin />, url: "https://www.linkedin.com/in/ruan-lopes-12041b1bb/" },
	];
	return (
		<>
			{Socials.map((social, index) => {
				return (
					<a key={index} href={social.url} target="_blank">
						<span className="text-[2rem]">{social.icon}</span>
					</a>
				);
			})}
		</>
	);
}
