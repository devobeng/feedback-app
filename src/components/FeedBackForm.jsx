import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedBackForm = ({ addFeedback }) => {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};
			addFeedback(newFeedback);
			setText('');
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect
					select={(rating) => setRating(rating)}
					rating={rating}
					text={text}
				/>
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button type='submit' version='secondary' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedBackForm;
