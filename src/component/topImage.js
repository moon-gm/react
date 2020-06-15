import React from 'react';
import logo from './../images/logo.svg';
import './../sass/App.scss';

const TopImage = ({comment}) => {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo App-logo2" alt="logo" />
				<p>
					Top Page
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default TopImage;
