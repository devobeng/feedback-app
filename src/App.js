import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import FeedBackForm from './components/FeedBackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackData from './FeedbackData';
import About from './components/pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
	const [feedback, setFeedback] = useState(FeedbackData);
	const addFeedback = (newfeeback) => {
		newfeeback.id = uuidv4();
		setFeedback([newfeeback, ...feedback]);
	};
	const handleDelete = (id) => {
		if (window.confirm('Are you sure ')) {
			const filterFeedback = feedback.filter((item) => item.id !== id);
			setFeedback(filterFeedback);
		}
	};
	return (
		<FeedbackProvider>
			<Routers>
				<>
					<Header title='Feedback UI' />
					<div className='container'>
						<Routes>
							<Route
								path='/'
								element={
									<>
										<FeedBackForm addFeedback={addFeedback} />
										<FeedbackStats feedback={feedback} />
										<FeedbackList
											feedback={feedback}
											handleDelete={handleDelete}
										/>
									</>
								}
							/>

							<Route path='/about' element={<About />} />
						</Routes>
						<AboutIcon />
					</div>
				</>
			</Routers>
		</FeedbackProvider>
	);
}

export default App;
