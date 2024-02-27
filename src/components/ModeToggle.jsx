import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const ModeToggle = ({ theme, toggleTheme }) => {
	return (
		<button id='mode' type='button' onClick={toggleTheme}>
			Mode
			{theme ? <FaSun /> : <FaMoon />}
		</button>
	);
};

export default ModeToggle;
