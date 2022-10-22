import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

/**
 *
 * Takes care of states that are used by both screens this could have been done as context to get rid of the propp drilling.
 *
 * showRules - Toggles the game rules layer on/off
 * myChoice  - Stores your choice (Rock, Paper, Scissor)
 * play      - Toggles from choice screen to outputscreen.
 * points    - Stores the points
 */
const useGameLogic = () => {
	const [showRules, setShowRules] = useState(false);
	const [myChoice, setMyChoice] = useState('');
	const [play, setPlay] = useState(false);
	const [points, setPoints] = useState(0);
	const [cookies, setCookie, get] = useCookies(['cookie-name']);

	// If myChoice updated it means that player alread choose and we need to toggle to outputscreen
	useEffect(() => {
		if (myChoice) setPlay(true);
	}, [myChoice]);

	// saves cookie so points will be stored even tough browser is refreshed
	useEffect(() => {
		console.log('Points updated');
		setCookie('rps-points', points);
	}, [points]);

	// when app starts get saved points
	useEffect(() => {
		if (!isNaN(cookies['rps-points']))
			setPoints(parseInt(cookies['rps-points']));
	}, []);

	// When play again btn is pressed it removes the choice so the state can be updated next match
	// else if player cannot choose the same option as in previous game
	const playagain = () => {
		setPlay(false);
		setMyChoice('');
	};

	return {
		showRules: showRules,
		setShowRules: setShowRules,
		setMyChoice: setMyChoice,
		play: play,
		playagain: playagain,
		myChoice: myChoice,
		points: points,
		setPoints: setPoints,
	};
};

export default useGameLogic;
