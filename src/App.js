import './App.css';
// Components
import { Scoreboard } from './components/Scoreboard';
import { Rules } from './components/Rules';
// Screens
import { ChoiceScreen } from './Screens/ChoiceScreen';
import { OutcomeScreen } from './Screens/OutcomeScreen';
// Hooks
import { useGameLogic } from './hooks/useGameLogic';

function App() {
	const {
		showRules,
		setShowRules,
		setMyChoice,
		play,
		playagain,
		myChoice,
		points,
		setPoints,
	} = useGameLogic();

	return (
		<>
			<Scoreboard points={points} />
			{!play ? (
				<ChoiceScreen setMyChoice={setMyChoice} />
			) : (
				<OutcomeScreen
					myChoice={myChoice}
					setPoints={setPoints}
					playagain={playagain}
				/>
			)}
			<div className='rules-container'>
				<button
					className='rules-btn'
					onClick={() => setShowRules((prev) => !prev)}
				>
					RULES
				</button>
			</div>
			{showRules && <Rules toggleRules={setShowRules} />}
		</>
	);
}

export default App;
