import { cta } from "../../../constants";

const CTA = () => {
	return (
		<div>
			<svg
				className="w-full max-h-40 translate-y-[2px]"
				preserveAspectRatio="none"
				width="2160"
				height="263"
				viewBox="0 0 2160 263"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="Wave"
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
					fill="#0D2436"
				/>
			</svg>

			<section className="relative bg-dark-hard px-5">
				<div className="container grid grid-cols-12 mx-auto">
					{/* this div only visible on mobile */}
					<div className="col-span-12 md:hidden text-center px-5">
						<h2 className="text-white font-bold text-2xl">
							Get our stories delivered From us to your inbox weekly.
						</h2>
						<div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto">
							<input
								type="text"
								placeholder="Your email"
								className="px-4 py-3 w-full rounded-md placeholder:text-dark-light focus:outline-primary focus:outline-none"
							/>
							<button className="px-4 py-3 rounded-md w-full bg-primary text-white font-bold">
								Get started
							</button>
						</div>
						<p className="text-dark-light text-sm  leading-5 mt-5">
							Get a response tomorrow if you submit by 9pm today. If we received
							after 9pm will get a reponse the following day.
						</p>
					</div>
					{/* this div not visible on mobile */}
					<div className="col-span-12 hidden md:flex md:flex-col px-16 mb-[70px] lg:flex-row-reverse items-center">
						<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
							<img
								src={cta}
								alt="call to action"
								className="w-[578px] h-[472px]"
							/>
						</div>
						<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
							<h2 className="text-white font-bold text-[36px] leading-[48px] text-center lg:text-start">
								Get our stories delivered From us to your inbox weekly.
							</h2>
							<div className="grid grid-cols-10 gap-2 w-full mt-5">
								<input
									type="text"
									placeholder="Your email"
									className="col-span-8 px-4 py-3 rounded-md placeholder:text-dark-light focus:outline-primary focus:outline-none"
								/>
								<button className="col-span-2 px-4 py-3 rounded-md bg-primary text-white font-bold">
									Get started
								</button>
							</div>
							<p className="text-dark-light text-lg leading-7 mt-6 text-center lg:text-start">
								Get a response tomorrow if you submit by 9pm today. If we
								received after 9pm will get a response the following day.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CTA;
