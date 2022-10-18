import React from 'react';
import './scoreboard.css';

const Scoreboard = ({ points }) => {
	return (
		<div className='score-main-container'>
			<div className='score-title-container'>
				<div className='title-text'>ROCK</div>
				<div className='title-text'>PAPER</div>
				<div className='title-text'>SCISSOR</div>
			</div>
			<div className='score-board-container'>
				<div className='score-title-text'>SCORE</div>
				<div className='score-text'>{points}</div>
			</div>
		</div>
	);
};

export default Scoreboard;
