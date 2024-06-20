/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
			{/* using children here to indicate that every other thing is between header and footer */}
			{children}
			<Footer />
		</div>
	);
};

export default MainLayout;
