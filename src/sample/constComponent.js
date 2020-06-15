import React from 'react';
import logo from './../images/logo.svg';
import './/Sample.scss';

const ConstComponent = ({comment}) => {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo App-logo2" alt="logo" />
				<p>
					Sample Page (<code>made  by {comment}</code>)
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

export default ConstComponent;
