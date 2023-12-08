import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screen/Home.tsx";
import BaseScreen from "./BaseScreen.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Note from "./screen/Note.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseScreen />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/note",
				element: <Note />,
			},
		],
	},
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
