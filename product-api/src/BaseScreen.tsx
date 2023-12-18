import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

const BaseScreen = () => {
	return (
		<>
			<Header />
			<main className='flex-1 overflow-y-auto grid'>
				<Outlet />
			</main>
			<ToastContainer />
		</>
	);
};

export default BaseScreen;
