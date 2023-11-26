import { ReactElement } from "react";
import { Link } from "react-router-dom";

type Props = {
	className: string;
	children: ReactElement[] | ReactElement;
};

export default function Main({ className, children }: Readonly<Props>) {
	return (
		<div className={className}>
			<button
				className='btn btn-link'
				onClick={() => console.log("back")}
			>
				Back
			</button>
			{children}
		</div>
	);
}
