/* eslint-disable react/prop-types */
import { post1, author } from "../constants";
import { BadgeCheck } from "lucide-react";

const ArticleCard = ({ className }) => {
	return (
		<div
			className={`rounded-3xl overflow-hidden ${className}  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]`}
		>
			<img
				src={post1}
				alt="post thumbnail"
				className="w-full object-cover object-center h-auto md:h-52"
			/>
			<div className="p-5">
				<h2 className="text-2xl font-bold text-dark-soft md:text-3xl">
					Future of Learning
				</h2>
				<p className="mt-3 text-dark-light">
					A constant ability to learn will be on the most crucial skills.
				</p>
				<div className="flex justify-between flex-nowrap items-center mt-6">
					<div className="flex items-center gap-x-2 md:gap-x-3">
						<img
							src={author}
							alt="author-pfp"
							className="rounded-full w-9 h-9 md:w-10 md:h-10"
						/>
						<div className="flex flex-col">
							<h4 className="font-bold italic text-sm text-dark-soft">
								0x Mage
							</h4>
							<div className="flex items-center gap-x-2">
								<span className="bg-[#36B37E] bg-opacity-25  rounded-full">
									<BadgeCheck className="w-5 h-5 text-[#36B37E]" />
								</span>
								<span className="italic text-dark-light text-xs">
									Verified Author
								</span>
							</div>
						</div>
					</div>
					<span className="font-bold text-dark-light italic text-sm md:text-base">
						02 July
					</span>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
