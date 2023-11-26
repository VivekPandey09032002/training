import { Form, useActionData, useFormAction } from "react-router-dom";

export async function action({ request }: { request: Request }) {
	const form = await request.formData();
	const formToJSON = {};
	for (const [key, value] of [...form.entries()]) {
		formToJSON[key] = value;
	}
	console.log(formToJSON);
	return null;
}

export default function AddContact() {
	const data = useActionData();
	return (
		<div className='bg-gray-400 grid place-items-center h-full'>
			<div className='card lg:card-side bg-base-100 shadow-xl'>
				<figure>
					<img
						src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg'
						alt='Album'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title m-3'>Add New Contact!</h2>
					<Form method='post'>
						<div className='grid grid-cols-1 gap-2'>
							<input
								type='text'
								placeholder='Type here firstName'
								className='input w-[400px] input-bordered'
								name='firstName'
							/>
							<input
								type='text'
								placeholder='Type here lastName'
								className='input w-[400px]  input-bordered'
								name='lastName'
							/>
							<input
								type='url'
								placeholder='Type here avatar url'
								className='input w-[400px]  input-bordered'
								name='avatar'
							/>
							<input
								type='text'
								placeholder='Type here twitter handler'
								className='input w-[400px]  input-bordered'
								name='twitter'
							/>
							<textarea
								className='textarea textarea-ghost'
								placeholder='Type here notes'
								name='notes'
							></textarea>
							<button type='submit' className='btn btn-success'>
								Submit
							</button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
}
