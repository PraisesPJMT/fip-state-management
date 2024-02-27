import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	outcomes: [
		{ id: 'ABC1', value: 'Store' },
		{ id: 'ABC2', value: 'Slice' },
		{ id: 'ABC3', value: 'Actions' },
		{ id: 'ABC4', value: 'Reducers' },
		{ id: 'ABC5', value: 'Async Thunk' },
	],
};

const generateRandomID = () => {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let id = '';
	for (let i = 0; i < 4; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		id += characters.charAt(randomIndex);
	}
	return id;
};

export const outcomesSlice = createSlice({
	name: 'outcomes',
	initialState,
	reducers: {
		addOutcome: (state, action) => {
			state.outcomes.push({ id: generateRandomID(), value: action.payload });
		},
		editOutcome: (state, action) => {
			const { id, value } = action.payload;
			console.log(action.payload);
			const index = state.outcomes.findIndex((outcome) => outcome.id === id);
			if (index !== -1) {
				state.outcomes[index].value = value;
			}
		},
		deleteOutcome: (state, action) => {
			state.outcomes = state.outcomes.filter(
				(outcome) => outcome.id !== action.payload
			);
		},
	},
});

export const { addOutcome, editOutcome, deleteOutcome } = outcomesSlice.actions;

export default outcomesSlice.reducer;
