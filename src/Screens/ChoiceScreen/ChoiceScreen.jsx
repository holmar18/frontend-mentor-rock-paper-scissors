import React from 'react';
import './choiceScreen.css';
import { RockPaperScissor } from '../../components/RockPaperScissor';
import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import triangle from '../../assets/images/bg-triangle.svg';
// constants
import { colors } from '../../constants/constants';

/**
 * Screen 1
 *
 * Displays choices Rock, paper & scissor
 *
 */
const ChoiceScreen = ({ setMyChoice }) => {
	return (
		<>
			<div className='choice-main-container'>
				<img src={triangle} className='triangle' />
				<div className='choice-item-container'>
					<RockPaperScissor
						src={paper}
						alt={'paper'}
						shadowClass={'paper-shadow'}
						setMyChoice={setMyChoice}
						style={{
							backgroundImage: colors.paper,
							marginBottom: '6rem',
						}}
					/>
				</div>
				<div className='choice-item-container'>
					<RockPaperScissor
						src={scissor}
						alt={'scissor'}
						shadowClass={'scissor-shadow'}
						setMyChoice={setMyChoice}
						style={{
							backgroundImage: colors.scissor,
							marginLeft: 'auto',
							marginBottom: '6rem',
						}}
					/>
				</div>
				<div className='choice-item-container'>
					<RockPaperScissor
						src={rock}
						alt={'rock'}
						shadowClass={'rock-shadow'}
						setMyChoice={setMyChoice}
						style={{
							backgroundImage: colors.rock,
							margin: '0 auto',
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default ChoiceScreen;
