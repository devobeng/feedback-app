import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';

const About = () => {
	return (
		<Card>
			<div className='about'>
				<h1>Feedback Application</h1>
				<p>Version 1.0.0</p>
				<p>
					<Link to='/'>Back Home</Link>
				</p>
			</div>
		</Card>
	);
};

export default About;
