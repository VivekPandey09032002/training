import dice1 from "../assets/images/dice/dice_1.png";
import dice2 from "../assets/images/dice/dice_2.png";
import dice3 from "../assets/images/dice/dice_3.png";
import dice4 from "../assets/images/dice/dice_4.png";
import dice5 from "../assets/images/dice/dice_5.png";
import dice6 from "../assets/images/dice/dice_6.png";

export function getDiceImage(dice: number) {
	switch (dice) {
		case 1:
			return dice1;
		case 2:
			return dice2;
		case 3:
			return dice3;
		case 4:
			return dice4;
		case 5:
			return dice5;
		case 6:
			return dice6;
		default:
			return dice1;
	}
}

export function getRandomInt(max: number) {
	return Math.floor(Math.random() * max) + 1;
}
