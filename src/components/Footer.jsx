import { Logo } from "../constants";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
	return (
		<section className="bg-dark-hard translate-y-[-1px]">
			<footer className="container mx-auto grid grid-cols-10 px-10 py-10 gap-y-10 gap-x-10 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
				<div className="col-span-5 md:col-span-4 lg:col-span-2">
					<h3 className="text-dark-light font-bold">Product</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4  lg:col-span-2">
					<h3 className="text-dark-light font-bold">Services</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4 md:col-start-5  lg:col-span-2">
					<h3 className="text-dark-light font-bold">Company</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-5 md:col-span-4  lg:col-span-2">
					<h3 className="text-dark-light font-bold">Product</h3>
					<ul className="text-[#959EAD] text-sm mt-5 space-y-4">
						<li>
							<a href="/">Documentation</a>
						</li>
						<li>
							<a href="/">Features</a>
						</li>
						<li>
							<a href="/">Referral Program</a>
						</li>
						<li>
							<a href="/">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="col-span-10 text-dark-light md:order-first md:col-span-4  lg:col-span-2">
					<img
						src={Logo}
						alt="Logo"
						className=" brightness-0 invert-[100%] mx-auto md:mx-0"
					/>
					<p className="text-sm text-center mt-4 md:text-left md:text-base">
						Build a modern author portfolio with ehya
					</p>
					<ul className="flex justify-center items-center mt-5 space-x-5 text-gray-300 md:justify-start">
						<li>
							<a href="/">
								<FaXTwitter className="w-6 h-auto" />
							</a>
						</li>
						<li>
							<a href="/">
								<FaInstagram className="w-6 h-auto" />
							</a>
						</li>
						<li>
							<a href="/">
								<TbBrandLinkedin className="w-6 h-auto" />
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
