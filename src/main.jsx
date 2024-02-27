import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

import App from './App.jsx';
import ReactDOM from 'react-dom/client';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
