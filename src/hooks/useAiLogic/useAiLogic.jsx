import { useState, useEffect } from 'react';
// svg
import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissor from '../../assets/images/icon-scissors.svg';

/**
 *
 * Stores logic that is only used by screen 2 (Outputscreen)
 *
 * @param {function} setPoints - function to update points
 * @param {string} myChoice    - Players choice
 */
const useAiLogic = (setPoints, myChoice) => {
	const choices = ['paper', 'rock', 'scissor'];
	const [ai, setAi] = useState(null);
	const [winLoss, setWinLoss] = useState(null);

	// will evaluate vitory when ai has updated
	// if ai updates random values have been selected for the computer
	useEffect(() => {
		if (ai) EvalVictory();
	}, [ai]);

	// Returns the right SVG file based on choice picked
	const pickSvg = (mc) => {
		switch (mc) {
			case 'paper':
				return paper;
			case 'scissor':
				return scissor;
			default:
				return rock;
		}
	};

	// Gets a random choice for the computer player
	// and sets a small timout so it dosn't appear instantly
	const ComputerChoice = () => {
		setTimeout(() => {
			const AI = choices[Math.floor(Math.random() * choices.length)];
			setAi({
				pc: AI,
				svg: pickSvg(AI),
			});
		}, 1500);
	};

	// Evaluates if the game is won/lost or draw
	const EvalVictory = () => {
		if (
			(myChoice === 'paper' && ai.pc === 'rock') ||
			(myChoice === 'rock' && ai.pc === 'scissor') ||
			(myChoice === 'scissor' && ai.pc === 'paper')
		) {
			setPoints((points) => points + 1);
			setWinLoss('YOU WIN');
		} else if (
			(myChoice === 'paper' && ai.pc === 'scissor') ||
			(myChoice === 'scissor' && ai.pc === 'rock') ||
			(myChoice === 'paper' && ai.pc === 'scissor')
		) {
			setPoints((points) => points - 1);
			return setWinLoss('YOU LOSE');
		} else {
			return setWinLoss('DRAW');
		}
	};

	return {
		ai: ai,
		pickSvg: pickSvg,
		ComputerChoice: ComputerChoice,
		winLoss: winLoss,
	};
};

export default useAiLogic;
