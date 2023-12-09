import { ChangeEvent, useRef } from "react";

interface Props {
	setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ setSearchText }: Props) => {
	const searchRef = useRef<HTMLElement>(null);
	function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value);
	}

	return (
		<input
			type='text'
			placeholder='Search Todo'
			className='input input-bordered input-sm w-full focus:border-none focus:outline-none'
			onKeyDown={(e) => {
				if (e.code === "Enter" || e.code == "Escape")
					searchRef.current?.click();
			}}
			onChange={handleSearchInputChange}
		/>
	);
};

export default Input;
