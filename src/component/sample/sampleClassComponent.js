import React from './../../../node_modules/react';
import logo from './../../images/logo.svg';
import './../../sass/App.scss';

class SampleClassComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			x: 0,
		};

		this.bindFunc = this.func.bind(this);
	}

	func() {
		if (this.state.x === 0) {
			this.setState({x: 1});
			console.log(this.state);
		} else {
			this.setState({x: 0});
			console.log(this.state);
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Sample Page (<code>sampleClassComponent.js</code>)
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						{this.state.x === 0 && "Learn React"}
						{this.state.x === 1 && "Try React"}
					</a>
					<p
						className="App-link"
						onClick={this.bindFunc}
					>
						STATE CHANGE
					</p>
				</header>
			</div>
		);
	}

}

export default SampleClassComponent;
