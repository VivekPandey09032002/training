import { useState } from "react";
import { getDiceImage, getRandomInt } from "../service/diceService";

type Props = {
	systemDice: number;
	setSystemDice: React.Dispatch<React.SetStateAction<number>>;
	calculateResult: () => void;
	handleReset: () => void;
};

const randomDice = getRandomInt(6);

export default function DiceBody({
	systemDice,
	setSystemDice,
	calculateResult,
    handleReset
}: Readonly<Props>) {
	const [toogleHelp, setToogleHelp] = useState(false);

	if (systemDice !== 0) console.log("current systemDice", systemDice);

	function handleImageClick() {
		const random = getRandomInt(6);
		setSystemDice(random);
		calculateResult();
	}

	return (
		<>
			<div className='container mx-auto card card-compact w-96 bg-base-100 shadow-xl'>
				<figure>
					<img
						src={getDiceImage(
							systemDice === 0 ? randomDice : systemDice
						)}
						alt='Shoes'
						onClick={handleImageClick}
						onKeyDown={console.log}
					/>
				</figure>
				<div className='card-body'>
					<div className='card-actions items-center flex-col gap-3'>
						<button className='btn btn-outline' onClick={handleReset}>Reset Score</button>
						<button
							className='btn btn-neutral'
							onClick={() => setToogleHelp(!toogleHelp)}
						>
							Show Rules
						</button>
					</div>
				</div>
			</div>
			{toogleHelp && (
				<>
					<div
						role='alert'
						className='w-1/2 mx-auto mt-5 alert bg-red-400'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className='stroke-current shrink-0 w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							></path>
						</svg>
						<span>How to play dice game</span>
					</div>
					<div className='w-1/2 mx-auto card bg-gray-300'>
						<div className='card-body'>
							<span>Select any number</span>
							<span>Click on Dice Image</span>
							<span>
								After click on dice if selected number is equal
								to dice number you will get point
							</span>
							<span>
								If wrong guess the 2 point will be deducted
							</span>
						</div>
					</div>
				</>
			)}
		</>
	);
}
