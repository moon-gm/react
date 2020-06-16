import React from 'react';
import Top from './pages/top';
import Aside from './parts/aside'
import Header from './parts/header'
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
		this.bindPage0 = this.page0.bind(this);
		this.bindPage1 = this.page1.bind(this);
		this.bindPage2 = this.page2.bind(this);
		this.bindMenu = Menu.bind(this);

		// 設定値定義
		this.pages = [
			{"name": "Top", "func": this.bindPage0, "state": 0},
			{"name": "環境構築", "func": this.bindPage1, "state": 1},
			{"name": "Stateの使い方", "func": this.bindPage2, "state": 2},
		];
	}

	page0() {
		this.setState({page: 0});
		this.setState({menu: 'hide'});
		console.log(this.state);
	}
	page1() {
		this.setState({page: 1});
		this.setState({menu: 'hide'});
		console.log(this.state);
	}
	page2() {
		this.setState({page: 2});
		this.setState({menu: 'hide'});
		console.log(this.state);
	}

	render() {
		return (
			<div className="flex-box">

				{/* サイドエリア */}
				{this.state.menu === 'show' && <Aside pages={this.pages} />}
				{this.state.menu === 'hide'}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Header func={this.bindMenu} />

					{/* メインエリア */}
					<main className="main">
						{/* コンテンツ切替設定 */}
						{this.state.page === 0 && <Top comment={this.pages[0].name} />}
						{this.state.page === 1 && <Top comment={this.pages[1].name} />}
						{this.state.page === 2 && <Top comment={this.pages[2].name} />}
					</main>

				</div>
			</div>
		);
	}

}

export default Layout;
