const Home = () => {
	return (
		<div className='container mx-auto p-4'>
			{[...Array(10).keys()].map((i) => (
				<p className='text-3xl' key={i}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Culpa iste voluptas exercitationem consequatur perferendis
					explicabo tenetur natus officia fugiat molestias debitis,
					deserunt at praesentium alias ipsa aliquid, illo libero
					ipsum!
				</p>
			))}
		</div>
	);
};

export default Home;
