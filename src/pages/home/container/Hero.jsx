import { MdSearch } from "react-icons/md";

import { heroImage } from "../../../constants";

const Hero = () => {
	return (
		<section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
			{/* right side */}
			<div className="mt-10 lg:w-1/2">
				<h1 className="text-5xl text-center font-bold text-dark-soft md:text-7xl lg:text-left lg:max-w-[540px]">
					Find the article you need, connect with authors globally.
				</h1>
				<p className="text-dark-light mt-4 text-center md:text-2xl lg:text-left">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua
				</p>
				<div className="flex flex-col gap-y-3 mt-10 relative">
					<div className="relative">
						<MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
						<input
							type="text"
							className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-md pl-12 pr-3 w-full py-3 focus:outline-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:py-4"
							placeholder="Search articles"
						/>
					</div>
					<button className="w-full bg-primary text-white font-semibold rounded-md px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
						Search
					</button>
				</div>
				<div className="flex mt-4 flex-col lg:flow-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
					<span className="text-dark-light font-semibold">Popular Tags</span>
					<ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3">
						<li className="rounded-md bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
							Design
						</li>
						<li className="rounded-md bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
							User experience
						</li>
						<li className="rounded-md bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
							Engineering{" "}
						</li>
					</ul>
				</div>
			</div>
			{/* right side */}

			{/* left side */}
			<div className="hidden lg:block lg:h-1/2">
				<img src={heroImage} alt="hero-image" className="w-full" />
			</div>
			{/* left side */}
		</section>
	);
};

export default Hero;
