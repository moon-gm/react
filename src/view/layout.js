import React from 'react';
import Aside from './parts/aside'
import Header from './parts/header'
import PageRouter from './router/pageRouter'
import Pages from './../config/pages';
import Functions from './../config/functions';
import States from './../config/states';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// stateの初期値設定
		this.state = {
			page: States.page.Top, // Top画面表示
			menu: States.menu.hide, // サイドメニュー非表示
			list1: States.list1.hide, // サイドメニューの子リスト1非表示
			list2: States.list2.hide, // サイドメニューの子リスト2非表示
		};

		// state設定
		this.states = States;

		// function設定
		this.funcs = [
			{
				"Top": Functions.PageTop.bind(this),
				"Menu": Functions.Menu.bind(this),
			},
			{
				"Page1": {
					"L1": Functions.Page1.bind(this),
					"S1": Functions.PageSection.bind(this, States.page.Page1.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page1.S2),
				},
			},
			{
				"Page2": this.page2.bind(this),
			},

		];

		// page設定
		this.pages = Pages(this.funcs, this.states);
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
				{this.state.menu === States.menu.hide}
				{this.state.menu === States.menu.show && (
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
