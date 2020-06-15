import React from 'react';
import Top from './topImage';
import './../sass/App.scss';

class Router extends React.Component {

	constructor(props) {
		super(props);

		this.state={
			type: 0,
		};

		this.bindFunc0 = this.func0.bind(this);
		this.bindFunc1 = this.func1.bind(this);
		this.bindFunc2 = this.func2.bind(this);

		this.types = ["Function", "Class", "Const"]
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
			<div className="App flex-box">
				<aside className="aside">
					<ul>
						<li
							className="App-link"
							onClick={this.bindFunc0}
						>
							{this.types[0]}
						</li>
						<li
							className="App-link"
							onClick={this.bindFunc1}
						>
							{this.types[1]}
						</li>
						<li
							className="App-link"
							onClick={this.bindFunc2}
						>
							{this.types[2]}
						</li>
					</ul>
				</aside>
				<main className="main">
					{this.state.type === 0 && <Top comment={this.types[0]} />}
					{this.state.type === 1 && <Top comment={this.types[1]} />}
					{this.state.type === 2 && <Top comment={this.types[2]} />}
				</main>
			</div>
		);
	}

}

export default Router;
