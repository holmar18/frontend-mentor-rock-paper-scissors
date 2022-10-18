import React, { useState } from 'react';
import './rockPaperScissor.css';

/**
 *	Components outputs Rock, paper & scissor, aswell as the circle around them
 *
 * @param src -- is source of svg file
 * @param alt -- is the alt text for the image
 * @param shadowClass -- class whom holds the outer drop shadow (has its own class to toggle it off)
 * @param style -- any style, but mainly different color
 *
 */
const RockPaperScissor = ({ src, alt, shadowClass, setMyChoice, style }) => {
	const [click, setClick] = useState(false);

	const handlMouseClick = () => {
		if (setMyChoice) {
			setClick(true);
			setTimeout(() => {
				setMyChoice(alt);
			}, 1000);
		}
	};

	const handleMouseRelease = () => {
		setClick(false);
	};

	return (
		<div
			className={`choice-item ${!click ? shadowClass : null}`}
			style={style}
			onMouseDown={handlMouseClick}
			onMouseUp={handleMouseRelease}
			onMouseOut={handleMouseRelease}
		>
			<div
				className={`choice-item-inner ${
					!click ? 'choice-item-inner-shadow' : null
				}`}
			>
				<img src={src} alt={alt} />
			</div>
		</div>
	);
};

export default RockPaperScissor;
