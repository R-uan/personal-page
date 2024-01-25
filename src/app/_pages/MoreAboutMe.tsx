import "../../style/media-queries/more-about-me.css";
import { ProfessionalSocialMedia } from "../_components/Socials";
import { UseColorThemeContext } from "../_context/ColorThemeContext";

export default function MoreAboutMe() {
	const { CurrentTheme } = UseColorThemeContext();
	return (
		<div id="about-me" className="sliders bg-[#100F0F]">
			<div className="main-box">
				<span style={{ color: CurrentTheme.RightBackground }}>More About me</span>
				<div className="content-box">
					<div className="sub-box flex flex-col gap-[2vh]">
						<section className="text-content">
							<span style={{ color: CurrentTheme.Heading2 }}>Hello World</span>
							<p style={{ color: CurrentTheme.Paragraph }}>
								Certified in System Analysis and being self-taught in web
								development. I have the desire to obtain experience in the industry
								and become a proficient professional that can be relied on to craft
								amazing products nationally and internationally.
							</p>
						</section>
						<section className="other-content">
							<ProfessionalSocialMedia />
						</section>
					</div>
					<div className="sub-box flex flex-col gap-[2vh] justify-end">
						<section className="other-content">
							<ProfessionalSocialMedia />
						</section>
						<section className="text-content">
							<span style={{ color: CurrentTheme.Heading2 }}>Goodbye World</span>
							<p style={{ color: CurrentTheme.Paragraph }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
								blanditiis omnis eaque, veritatis numquam illum facere dolore
								temporibus sapiente sunt, nesciunt inventore, voluptatem quibusdam
								corrupti sequi beatae voluptates.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
