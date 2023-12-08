import { useQuery } from "@tanstack/react-query";
import Todo from "../components/SingleNote";
import { getAllNote } from "../service/http";
import Skeleton from "../components/Skeleton";
import { useSearchParams } from "react-router-dom";
import Alert from "../components/ui/Alert";

function Home() {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = +(searchParams.get("_page") || 1);
	const limit = +(searchParams.get("_limit") || 4);
	const {
		data: notes,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["notes", { page, limit }],
		queryFn: () => getAllNote(page, limit),
	});
	const handleNext = () => {
		setSearchParams((prev) => ({
			...prev,
			_page: page + 1,
			_limit: limit,
		}));
	};

	const handlePrev = () => {
		setSearchParams((prev) => ({
			...prev,
			_page: Math.max(page - 1, 1),
			_limit: limit,
		}));
	};

	return (
		<main className='grid  place-items-center gap-4 mb-20'>
			<div className='flex max-w-2xl w-[45rem] gap-3'>
				<button
					className='btn btn-error'
					onClick={handlePrev}
					disabled={page === 1}
				>
					Previous
				</button>
				<button
					className='btn btn-accent'
					onClick={handleNext}
					disabled={notes && notes.length < limit}
				>
					Next Note
				</button>
			</div>
			{isLoading && <Skeleton size={4} />}
			{isError && (
				<Alert type='error'>
					<span>{error.message}</span>
				</Alert>
			)}

			{notes && notes.length === 0 && (
				<Alert type='info'>
					<span>No Notes to display</span>
				</Alert>
			)}
			{notes && notes.map((note) => <Todo key={note.id} note={note} />)}
		</main>
	);
}

export default Home;
