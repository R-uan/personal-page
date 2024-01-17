export default function TestComponent() {
	const tags = ["react", "next", "nodejs", "tailwind", "typescript"];
	return (
		<div className="repository flex flex-col h-fit w-max">
			<h3 className="text-4xl text-[#d0d0d0] font-semibold mb-[5px]">Portfolio</h3>
			<p className="text-[#F4EAE0] mb-[1.5vh] text-lg">
				Attempt to make a portfolio for a web developer (me) with Next JS (Node JS, React,
				Tailwind).Attempt to make a portfolio for a web developer (me) with Next JS (Node
				JS, React, Tailwind).Attempt to make a portfolio for a web developer (me) with Next
				JS (Node JS, React, Tailwind).
			</p>
			<ul className="flex gap-1 repo-tags flex-wrap">
				{tags.map((tag) => {
					return (
						<li className="p-3 pt-1 pb-1 w-fit text-2xl text-[#000000cc] bg-[#F6F7C4] rounded-2xl">
							{tag}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
