import { useState } from 'react';

const useTheme = (val) => {
	const [theme, setTheme] = useState(val);

	const toggleTheme = () => setTheme(!theme);
	return [theme, toggleTheme];
};

export default useTheme;
