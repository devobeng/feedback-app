import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import FeedBackForm from './components/FeedBackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';

import About from './components/pages/About';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
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
										<FeedBackForm />
										<FeedbackStats />
										<FeedbackList />
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
