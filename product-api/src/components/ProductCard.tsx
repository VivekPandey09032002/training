import { TProduct } from "../types";

interface Props {
	product: TProduct;
}

const ProductCard = ({ product }: Props) => {
	return (
		<div className='max-w-xs w-full bg-white shadow-md rounded-md overflow-hidden text-accent'>
			<img
				src={product.thumbnail}
				alt='iPhone X'
				className='w-full h-48 object-cover'
			/>

			<div className='p-4'>
				<h2 className='text-xl font-semibold mb-2'>{product.title}</h2>

				<div className='flex items-center justify-between mb-4'>
					<span className='text-green-600 font-semibold'>
						${product.price}
					</span>
					<span className='text-gray-500 line-through'>$1099</span>
					<span className='text-red-500'>-17.94%</span>
				</div>

				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center space-x-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='h-5 w-5 text-yellow-500'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M5 13l4 4L19 7'
							></path>
						</svg>
						<span className='text-gray-600'>{product.rating}</span>
					</div>
					<span className='text-gray-500'>
						In Stock: {product.stock}
					</span>
				</div>

				<div className='flex items-center justify-between'>
					<span className='text-gray-600'>
						Brand: {product.brand}
					</span>
					<span className='text-gray-600'>
						Category: {product.category}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
