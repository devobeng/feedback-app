import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'this is from context',
			rating: 5,
		},
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: true,
	});
	const addFeedback = (newfeeback) => {
		newfeeback.id = uuidv4();
		setFeedback([newfeeback, ...feedback]);
	};
	const editFeedback = (item) => {
		setFeedbackEdit({ item, edit: true });
	};
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		);
	};
	const handleDelete = (id) => {
		if (window.confirm('Are you sure ')) {
			const filterFeedback = feedback.filter((item) => item.id !== id);
			setFeedback(filterFeedback);
		}
	};
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				handleDelete,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
