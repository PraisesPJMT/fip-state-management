import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteOutcome,
	editOutcome,
} from '../store/reducers/outcomes/outcomeSlice';

const Outcome = ({ index, outcome }) => {
	const [edit, setEdit] = useState(false);
	const [outcomeEdit, setOutcomeEdit] = useState(outcome.value);

	const inputRef = useRef();
	const dispatch = useDispatch();

	const handSave = async () => {
		setEdit(false);

		if (outcomeEdit.length < 1) return;

		dispatch(editOutcome({ id: outcome.id, value: outcomeEdit }));
		setOutcomeEdit(outcome.value);
	};

	const handleDelete = async () => {
		dispatch(deleteOutcome(outcome.id));
	};

	return (
		<li>
			<div className='outcome'>
				<span>{index + 1}</span>
				{edit ? (
					<input
						type='text'
						name='outcome'
						ref={inputRef}
						value={outcomeEdit}
						placeholder={outcome.value}
						onChange={(e) => setOutcomeEdit(e.target.value)}
					/>
				) : (
					<p>{outcome.value}</p>
				)}
			</div>
			<div className='actions'>
				{edit ? (
					<button
						type='button'
						name='save'
						className='edit'
						onClick={handSave}
						disabled={outcomeEdit.length < 1}
					>
						SAVE
					</button>
				) : (
					<button
						type='button'
						name='edit'
						className='edit'
						onClick={() => {
							setEdit(true);
							inputRef.current.focus();
						}}
					>
						EDIT
					</button>
				)}
				<button
					type='button'
					name='delete'
					className='delete'
					onClick={handleDelete}
				>
					DELETE
				</button>
			</div>
		</li>
	);
};

export default Outcome;
