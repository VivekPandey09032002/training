"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { ReactNode, useState } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
	const [client] = useState(() => new QueryClient());
	return (
		<QueryClientProvider client={client}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	);
};

export default Provider;
