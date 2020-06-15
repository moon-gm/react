import React from 'react';
import Top from './pages/topImage';
import Aside from './parts/aside'
import './../sass/App.scss';
import Menu from '../function/showMenu.js';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// Stateの初期値設定
		this.state={
			page: 0,
			menu: 'hide'
		};

		// Functionの定義
		this.bindFunc0 = this.func0.bind(this);
		this.bindFunc1 = this.func1.bind(this);
		this.bindFunc2 = this.func2.bind(this);
		this.bindMenu = Menu.bind(this);
		// this.bindGangePages = this.changePages.bind(this);

		// 設定値定義
		this.pages = ["Top", "page1", "page2"];
		this.pageNums = [0, 1, 2];
		this.funcs = [this.bindFunc0, this.bindFunc1, this.bindFunc2];
	}

	func0() {
		this.setState({page: 0});
		console.log(this.state);
	}
	func1() {
		this.setState({page: 1});
		console.log(this.state);
	}
	func2() {
		this.setState({page: 2});
		console.log(this.state);
	}
	// changePages() {
	// 	let name = this.pages;
	// 	var id = document.getElementById(this.state.page).textContent;

	// 		if (id === name[0]){
	// 			this.setState({page: 0});
	// 			console.log(this.state);
	// 		}
	// 		if (id === name[1]){
	// 			this.setState({page: 1});
	// 			console.log(this.state);
	// 		}
	// 		if (id === name[2]){
	// 			this.setState({page: 1});
	// 			console.log(this.state);
	// 		}
	// }


	render() {
		return (
			<div className="flex-box">

				{/* サイドエリア */}
				{this.state.menu === 'show' && <Aside lists={this.pages} func={this.funcs} />}
				{this.state.menu === 'hide'}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<header className="header">
						<ul className="flex-box flex-box--space-between">
							<li>
								<img src="" alt="" />
							</li>
							<li
								className="App-link"
								onClick={this.bindMenu}
							>
								≡
							</li>
						</ul>
					</header>

					{/* メインエリア */}
					<main className="main">
						{/* コンテンツ切替設定 */}
						{this.state.page === 0 && <Top comment={this.pages[0]} />}
						{this.state.page === 1 && <Top comment={this.pages[1]} />}
						{this.state.page === 2 && <Top comment={this.pages[2]} />}
					</main>

				</div>
			</div>
		);
	}

}

export default Layout;
