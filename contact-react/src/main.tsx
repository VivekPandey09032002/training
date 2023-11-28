import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home, { loader as contactLoader } from "./screen/Home.tsx";
import SingleContact from "./components/SingleContact.tsx";
import EditContact from "./components/EditContact.tsx";
import AddContact, { action as addAction } from "./components/AddContact.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		loader: contactLoader,
		children: [
			{
				action: addAction,
				path: "contact/add",
				element: <AddContact />,
			},
			{
				path: "contact/edit/:id",
				element: <EditContact />,
			},
			{
				path: "contact/:id",
				element: <SingleContact />,
			},
			{ index: true, element: <div>Home page</div> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
