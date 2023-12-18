import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { TProduct } from "../types";
import { headerTitle } from "../utils/constants";

const Home = () => {
	useEffect(()=>{
		
	},[])
	return (
		<div className='container mx-auto flex mt-5 flex-col gap-4'>
			<h1 className='font-bold text-xl'>{headerTitle}</h1>
			<div className='flex justify-between'>
				<input
					type='text'
					name='q'
					className='input input-bordered flex-1 mr-3 input-md '
				/>
				<select className='select select-md'>
					<option>Select Category</option>
					<option>abc</option>
					<option>abc</option>
					<option>abc</option>
					<option>abc</option>
				</select>
			</div>
			<div className='flex gap-2'>
				<ProductCard product={iPhoneX} />
				<ProductCard product={iPhoneX} />
				<ProductCard product={iPhoneX} />
				<ProductCard product={iPhoneX} />
			</div>
			<div className='flex justify-center gap-10'>
				<button className='btn btn-secondary rounded-lg'>
					Prev Product
				</button>
				<button className='btn btn-primary rounded-lg'>
					Next Product
				</button>
			</div>
		</div>
	);
};

export default Home;
