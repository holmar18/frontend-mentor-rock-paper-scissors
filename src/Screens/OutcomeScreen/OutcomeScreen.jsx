import React, { useEffect, useState } from 'react';
import './outcomeScreen.css';
// Components
import { RockPaperScissor } from '../../components/RockPaperScissor';
// constants
import { colors } from '../../constants/constants';
// Hooks
import { useAiLogic } from '../../hooks/useAiLogic';

/**
 * Screen 2
 *
 * Displays who won the game
 *
 * myChoice  - is players choice
 * setPoints - update points function
 * playgain  - resets values and toggles to screen 1
 *
 */
const OutcomeScreen = ({ myChoice, setPoints, playagain }) => {
	const { ai, pickSvg, ComputerChoice, winLoss } = useAiLogic(
		setPoints,
		myChoice
	);

	useEffect(() => {
		ComputerChoice();
	}, []);

	return (
		<div className='outcome-container'>
			<div className='outcome-player-choice'>
				<RockPaperScissor
					src={pickSvg(myChoice)}
					alt={myChoice}
					shadowClass={`${myChoice}-shadow`}
					style={{
						backgroundImage: colors[`${myChoice}`],
					}}
				/>
				<div className='outcome-text'>YOU PICKED</div>
			</div>
			{ai && (
				<div className='playagain-container'>
					<div className='outcome-text winloss-text'>{winLoss}</div>
					<div className='playagain-btn-container'>
						<button onClick={() => playagain()}>PLAY AGAIN</button>
					</div>
				</div>
			)}
			<div
				className='outcome-ai-choice'
				style={!ai ? { marginLeft: 'auto' } : null}
			>
				{ai ? (
					<RockPaperScissor
						src={ai.svg}
						alt={ai.pc}
						shadowClass={`${ai.pc}-shadow`}
						style={{
							backgroundImage: colors[`${ai.pc}`],
						}}
					/>
				) : (
					<div className='outcome-dark-circle'></div>
				)}
				<div className='outcome-text'>THE HOUSE PICKED</div>
			</div>
		</div>
	);
};

export default OutcomeScreen;
