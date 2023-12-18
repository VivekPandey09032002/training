import { TFilter } from "../types";

class FetchError extends Error {
	public statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.name = "Error while fetching";
		this.statusCode = statusCode;
	}
}

async function getAllProductWithFilter({ limit, skip, q, category }: TFilter) {
	const res = await fetch(
		`https://dummyjson.com/products/search?q=${q}?limit=${limit}&skip=${skip}`
	);
	if (!res.ok) {
		throw new FetchError("Error while fetching products", res.status);
	}
	return await res.json();
}
