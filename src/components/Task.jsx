import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Outcome from './Outcome';
import AddOutcome from './AddOutcome';

const Task = () => {
	const [outcomes, setOutcomes] = useState([]);

	const stateOutcomes = useSelector((state) => state.outcome.outcomes);

	useEffect(() => {
		setOutcomes([...stateOutcomes]);
	}, [stateOutcomes]);

	return (
		<section id='task'>
			<h2>Advanced Frontend Development</h2>
			<h3 className='sub-title'>Week 07 - ReactJS State Management System</h3>

			<div className='section'>
				<h3>Learning Outcomes</h3>
				<p>
					Learn how to use Redux and Context API for state management. Learn the
					following Redux Concepts:
				</p>
				<ul id='objectives'>
					{outcomes.map((outcome, index) => (
						<Outcome key={outcome.id} outcome={outcome} index={index} />
					))}
				</ul>
			</div>

			<AddOutcome />

			<div className='section'>
				<h3>Deliverables</h3>
				<p>Presentation of study from learning outcome.</p>
			</div>
		</section>
	);
};

export default Task;
