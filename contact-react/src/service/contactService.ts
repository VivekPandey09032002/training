import { Contact } from "../types/type";
import { fetchData } from "./apiService";

async function getAllContact() {
	return await fetchData<Contact>("http://localhost:3000/contacts");
}

export { getAllContact };
