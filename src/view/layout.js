import React from 'react';
import Aside from './parts/aside'
import Header from './parts/header'
import Router from './router/router'

// 各種設定値取得
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
				"Page2": {
					"L2": Functions.Page2.bind(this),
					"S1": Functions.PageSection.bind(this, States.page.Page2.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page2.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page2.S3),
				},
			},

		];

		// page設定
		this.pages = Pages(this.funcs, States);
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
						<Router
							pages={this.pages}
							states={this.state}
							route="page"
						/>
					</main>

				</div>
			</div>
		);
	}

}

export default Layout;
