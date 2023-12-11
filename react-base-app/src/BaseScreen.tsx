import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const BaseScreen = () => {
	return (
		<>
			<Header />
			<main className='flex-1 overflow-y-auto'>
				<Outlet />
			</main>
			<Footer />
			<ToastContainer />
		</>
	);
};

export default BaseScreen;
