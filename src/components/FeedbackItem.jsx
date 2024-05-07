import React from 'react';
import { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
const FeedbackItem = ({ item }) => {
	const { handleDelete, editFeedback } = useContext(FeedbackContext);
	const handleClick = (id) => {
		handleDelete(id);
	};
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => handleClick(item.id)}>
				<FaTimes color='purple' />
			</button>
			<button className='edit' onClick={() => editFeedback(item)}>
				<FaEdit color='purple' />
			</button>
			<div className='text display'>{item.text}</div>
		</Card>
	);
};

export default FeedbackItem;
