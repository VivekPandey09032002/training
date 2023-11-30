type Props = {
	score: number;
	dices: number[];
	handleDiceSelection: (dice: number) => void;
	currentSelectedDice: number;
};

export default function DiceHeader({
	score,
	dices,
	handleDiceSelection,
	currentSelectedDice,
}: Readonly<Props>) {
	return (
		<div
			id='game-header'
			className='container mx-auto flex justify-between'
		>
			<div id='game-score' className='relative flex-grow'>
				<h1 className='text-[8rem] px-2'>{score}</h1>
				<p className='absolute top-[9rem] font-semibold text-lg'>
					Total Score
				</p>
			</div>
			<div id='dice-select' className='flex-grow my-auto'>
				<div className='flex gap-3'>
					{dices.map((dice) => (
						<button
							key={dice}
							className={`border text-[4rem] flex-grow text-center  ${
								dice === currentSelectedDice && "bg-red-400"
							}`}
							onClick={() => handleDiceSelection(dice)}
						>
							{dice}
						</button>
					))}
				</div>
				<p className='text-end mt-2 mr-2 text-xl font-bold'>
					Select Number
				</p>
			</div>
		</div>
	);
}
