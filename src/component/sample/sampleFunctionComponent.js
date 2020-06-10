import React from './../../../node_modules/react';
import logo from './../../images/logo.svg';
import './../../sass/App.scss';

function SampleFunctionComponent() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Sample Page (<code>sampleFunctionComponent.js</code>)
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

export default SampleFunctionComponent;
