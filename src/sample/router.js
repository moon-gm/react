import React from 'react';
import Function from './functionComponent';
import Const from './constComponent';
import Class from './classComponent';
import './Sample.scss';

class Router extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			type: 0,
		};

		this.bindFunc0 = this.func0.bind(this);
		this.bindFunc1 = this.func1.bind(this);
		this.bindFunc2 = this.func2.bind(this);

		this.type = ["Function", "Class", "Const"]
	}

	func0() {
		this.setState({type: 0});
		console.log(this.state);
	}
	func1() {
		this.setState({type: 1});
		console.log(this.state);
	}
	func2() {
		this.setState({type: 2});
		console.log(this.state);
	}

	render() {
		return (
			<div className="App">
				<header className="flex-box">
					<p
						className="App-link"
						onClick={this.bindFunc0}
					>
						{this.type[0]}
					</p>
					<p
						className="App-link"
						onClick={this.bindFunc1}
					>
						{this.type[1]}
					</p>
					<p
						className="App-link"
						onClick={this.bindFunc2}
					>
						{this.type[2]}
					</p>
				</header>
				{this.state.type === 0 && <Function comment={this.type[0]} />}
				{this.state.type === 1 && <Class comment={this.type[1]} />}
				{this.state.type === 2 && <Const comment={this.type[2]} />}
			</div>
		);
	}

}

export default Router;
