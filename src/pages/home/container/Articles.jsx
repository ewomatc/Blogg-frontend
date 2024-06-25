import ArticleCard from "../../../components/ArticleCard";
import { ArrowRight } from "lucide-react";

const Articles = () => {
	return (
		<section className="container flex flex-col px-5 mx-auto  py-10">
			<div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
				<ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]" />
			</div>
			<button className="flex items-center mx-auto gap-x-1 font-bold text-primary border-2 border-primary px-6 py-3 rounded-md hover:gap-x-3 transition-all  duration-150">
				<span>More articles</span>
				<ArrowRight className="w-5 h-5" />
			</button>
		</section>
	);
};

export default Articles;
