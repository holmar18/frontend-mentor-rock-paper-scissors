import React from 'react';
import './rules.css';
import rulesSvg from '../../assets/images/image-rules.svg';
import { AiOutlineClose } from 'react-icons/ai';

const Rules = ({ toggleRules }) => {
	return (
		<div className='rules-display-overlay'>
			<div className='rules-display-container animate-fade'>
				<div className='rules-title-close-container'>
					<div className='rules-title'>RULES</div>
					<div className='rules-close'>
						<AiOutlineClose onClick={() => toggleRules(false)} />
					</div>
				</div>
				<img className='rules' src={rulesSvg} alt={'Rules'} />
			</div>
		</div>
	);
};

export default Rules;
