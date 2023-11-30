import { useState } from "react";
import DiceHeader from "../components/DiceHeader";
import DiceBody from "../components/DiceBody";

const diceNumbers = [1, 2, 3, 4, 5, 6];

const GameScreen = () => {
	const [score, setScore] = useState(0);
	const [userDice, setUserDice] = useState<number>(0);

	const [systemDice, setSystemDice] = useState<number>(0);

	function handleDiceClicked(dice: number) {
		setUserDice(dice);
	}

	function calculateResult() {
		if (userDice === 0) {
			alert("select a number please");
			return;
		}

		if (userDice === systemDice) {
			console.log("you win");
			setScore((prev) => prev + userDice);
		} else {
			console.log("you loose");
			setScore((prev) => prev - 2);
		}
	}

	function resetScore() {
		setScore(0);
		setUserDice(0);
		setSystemDice(0);
	}
	return (
		<div>
			<DiceHeader
				score={score}
				dices={diceNumbers}
				handleDiceSelection={handleDiceClicked}
				currentSelectedDice={userDice}
			/>
			<DiceBody
				handleReset={resetScore}
				systemDice={systemDice}
				setSystemDice={setSystemDice}
				calculateResult={calculateResult}
			/>
		</div>
	);
};

export default GameScreen;
