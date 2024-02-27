import React, { useState } from 'react';
import Profile from './components/Profile';
import Task from './components/Task';
import ModeToggle from './components/ModeToggle';
import Notice from './components/Notice';
import useTheme from './hooks/useTheme';

const App = () => {
	const [theme, toggleTheme] = useTheme(false);

	return (
		<div id='app' className={theme ? 'dark' : ''}>
			<main className='dark'>
				<Profile />
				<Task />
			</main>
			<ModeToggle theme={theme} toggleTheme={toggleTheme} />
			<Notice mode={theme} />
		</div>
	);
};

export default App;
