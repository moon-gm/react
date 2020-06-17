import React from 'react';
import Aside from './parts/aside'
import Header from './parts/header'
import PageRouter from './router/pageRouter'
import Pages from './../config/pages';
import Functions from './../config/functions';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// Stateの初期値設定
		this.state={
			page: 0, // Top画面表示
			menu: 'hide', // サイドメニュー非表示
			list1: 'hide', // サイドメニューの子リスト1非表示
			list2: 'hide', // サイドメニューの子リスト2非表示
		};

		// function設定
		this.funcs = [
			{
				"Top": Functions.PageTop.bind(this),
				"Menu": Functions.Menu.bind(this),
			},
			{
				"Page1": {
					"List1": Functions.Page1.List.bind(this),
					"S1": Functions.Page1.S1.bind(this),
					"S2": Functions.Page1.S2.bind(this),
				},
			},
			{
				"Page2": this.page2.bind(this),
			},
		];

		// ページ設定
		this.pages = Pages(this.funcs);
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
						<PageRouter
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
