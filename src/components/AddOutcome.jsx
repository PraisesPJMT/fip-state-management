import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOutcome } from '../store/reducers/outcomes/outcomeSlice';

const AddOutcome = () => {
	const [outcome, setOutcome] = useState('');

	const inputRef = useRef(null);

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (outcome.length < 1) return;

		dispatch(addOutcome(outcome));

		setOutcome('');
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form id='add-outcome' onSubmit={handleSubmit}>
			<h3>Add New Learning Outcome</h3>
			<div>
				<input
					type='text'
					name='outcome'
					value={outcome}
					ref={inputRef}
					placeholder='Enter outcome'
					onChange={(e) => setOutcome(e.target.value)}
				/>
				<button type='submit' disabled={outcome.length < 1}>
					ADD
				</button>
			</div>
		</form>
	);
};

export default AddOutcome;
