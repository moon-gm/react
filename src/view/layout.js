import React from 'react';
import Aside from './parts/aside'
import Header from './parts/header'
import Router from './router/pageRouter'
import Pages from './../config/pages';
import Menu from '../function/showMenu';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// Stateの初期値設定
		this.state={
			page: 0, // Top画面表示
			menu: 'hide', // サイドメニュー非表示
			list: 'hide', // サイドメニューの子リスト非表示
		};

		// function設定
		this.funcs = [
			{
				"Top": this.page0.bind(this),
				"Menu": Menu.bind(this),
			},
			{
				"page1": {
					"s0": this.page1.bind(this),
					"s1": this.page1sec1.bind(this),
					"s2": this.page1sec2.bind(this),
				},
			},
			{
				"page2": this.page2.bind(this),
			},
		];

		// ページ設定
		this.pages = Pages(this.funcs);
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
						func={this.funcs[0].Menu}
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
