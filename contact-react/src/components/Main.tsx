type Props = {
	className: string;
};

export default function Main({ className }: Readonly<Props>) {
	return <div className={className}>Main</div>;
}
