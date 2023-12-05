function Home() {
	return (
		<div id='main-content'>
			<div className='hero min-h-screen'>
				<div className='hero-content flex-col lg:flex-row'>
					<img
						src='https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg'
						className='max-w-sm rounded-lg shadow-2xl'
					/>
					<div>
						<h1 className='text-5xl font-bold'>Box Office News!</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
			{/* Carousel */}
			<div className='mx-auto container'>
				<div className='carousel rounded-box'>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg'
							alt='Burger'
						/>
					</div>
					<div className='carousel-item' id='carousel'>
						<img
							src='https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg'
							alt='Burger'
						/>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default Home;
