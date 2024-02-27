import { configureStore } from '@reduxjs/toolkit';

import outcomeReducer from './reducers/outcomes/outcomeSlice';

export const store = configureStore({
	reducer: {
		outcome: outcomeReducer,
	},
});
