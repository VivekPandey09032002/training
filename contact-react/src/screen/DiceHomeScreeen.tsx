import { useNavigate } from "react-router-dom";
import logo from "../assets/images/dices.png";
import { useState } from "react";

const DiceHomeScreeen = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function toGameScreen() {
		console.log("button clicked");
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate("/play");
		}, 1000);
	}
	return (
		<div id='game-menu' className='flex items-center gap-3'>
			<img src={logo}></img>
			<div className='flex-grow relative'>
				<h1 className='uppercase text-8xl font-bold'>Dice Game</h1>
				<div className='absolute end-[10rem] p-2'>
					<button className='btn btn-neutral' onClick={toGameScreen}>
						{loading && (
							<span className='loading loading-spinner loading-lg'></span>
						)}
						Play Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default DiceHomeScreeen;
