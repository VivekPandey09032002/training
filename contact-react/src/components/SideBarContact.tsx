import { Contact } from "../types/type";

type Props = {
	contacts: Contact[];
};

export default function SideBarContact({ contacts }: Readonly<Props>) {
	return (
		<ul className='p-2 text-[18px] list-disc list-inside text-gray-800 font-medium'>
			{contacts.map((contact) => (
				<li key={contact.id}>
					{contact.firstName} {contact.lastName}
				</li>
			))}
		</ul>
	);
}
