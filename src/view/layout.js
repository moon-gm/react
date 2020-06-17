import React from 'react';
import Aside from './parts/aside'
import Header from './parts/header'
import Router from './router/pageRouter'
import Menu from '../function/showMenu';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// Stateの初期値設定
		this.state={
			page: 0,
			menu: 'hide',
			list: 'hide',
		};

		// Functionの定義
		this.bindPage0 = this.page0.bind(this);
		this.bindPage1 = this.page1.bind(this);
		this.bindPage1sec1 = this.page1sec1.bind(this);
		this.bindPage1sec2 = this.page1sec2.bind(this);
		this.bindPage2 = this.page2.bind(this);
		this.bindMenu = Menu.bind(this);

		// 設定値定義

		this.funcs = [{
			"Top": this.bindPage0,
			"page1": {
				"s0": this.bindPage1,
				"s1": this.bindPage1sec1,
				"s2": this.bindPage1sec2,
			},
			"page2": this.bindPage2,
		}];

		this.pages = [
			{
				"name": "React Learning",
				"func": this.funcs[0].Top,
				"state": 0,
			},
			{
				"name": "1. 環境構築",
				"func": this.funcs[0].page1.s0,
				"state": 1,
				"children": [
					{
						"name": "1-1. create-react-appを使用",
						"func": this.funcs[0].page1.s1,
						"state": ['show', '1sec1'],
					},
					{
						"name": "1-2. 手動で設定",
						"func": this.funcs[0].page1.s2,
						"state": ['show', '1sec2'],
					},
				],
			},
			{
				"name": "2. Stateの使い方",
				"func": this.funcs[0].page2,
				"state": 2,
			},
		];
	}

	page0() {
		this.setState({page: 0});
		this.setState({menu: 'hide'});
		console.log(this.state);
	}
	page1() {
		if (this.state.list === "hide") {
			this.setState({list: 'show'});
		} else {
			this.setState({list: 'hide'});
		}
		console.log(this.state);
	}
	page1sec1() {
		this.setState({page: '1sec1'});
		this.setState({menu: 'hide'});
		console.log(this.state);
	}
	page1sec2() {
		this.setState({page: '1sec2'});
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
				{this.state.menu === 'hide'}
				{this.state.menu === 'show' && (
					<Aside
						pages={this.pages}
						states ={this.state}
					/>
				)}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Header
						pages={this.pages}
						states={this.state}
						func={this.bindMenu}
					/>

					{/* メインエリア */}
					<main className="main">
						{/* コンテンツ(ページ)切替 */}
						<Router
							pages={this.pages}
							states={this.state}
						/>
					</main>

				</div>
			</div>
		);
	}

}

export default Layout;
