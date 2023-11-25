import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as contactLoader } from "./screen/Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		loader: contactLoader,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
