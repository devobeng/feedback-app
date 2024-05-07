import React from 'react';

const Header = ({ title }) => {
	return (
		<header>
			<div className='container'>
				<h2>{title}</h2>
			</div>
		</header>
	);
};

export default Header;
