import React from 'react';

// 各種コンポーネント取得
import Router from './../config/routes'
import Parts from './../config/parts';

// 各種設定値取得
import AllData from './../config/allData';
import Functions from './../config/functions';
import States from './../config/states';

class Layout extends React.Component {

	constructor(props) {
		super(props);

		// stateの初期値設定
		this.state = {
			page: States.page.Top, // Top画面表示
			menu: States.menu.hide, // サイドメニュー非表示
			list: States.list.hide, // サイドメニューの子リスト非表示
		};

		// function設定
		this.funcs = [
			{
				"Top": Functions.Page.bind(this, States.page.Top),
				"Menu": Functions.Menu.bind(this),
			},
			{
				"Page1": {
					"L1": Functions.List.bind(this, States.list.list1),
					"S1": Functions.PageSection.bind(this, States.page.Page1.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page1.S2),
					"S3": Functions.PageSection.bind(this, States.page.Page1.S3),
				},
			},
			{
				"Page2": {
					"L2": Functions.List.bind(this, States.list.list2),
					"S1": Functions.PageSection.bind(this, States.page.Page2.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page2.S2),
				},
			},
			{
				"Page3": {
					"L3": Functions.List.bind(this, States.list.list3),
					"S1": Functions.PageSection.bind(this, States.page.Page3.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page3.S2),
				},
			},
			{
				"Page4": {
					"L4": Functions.List.bind(this, States.list.list4),
					"S1": Functions.PageSection.bind(this, States.page.Page4.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page4.S2),
				},
			},
			{
				"Page5": {
					"L5": Functions.List.bind(this, States.list.list5),
					"S1": Functions.PageSection.bind(this, States.page.Page5.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page5.S2),
				},
			},
			{
				"Page6": {
					"L6": Functions.List.bind(this, States.list.list6),
					"S1": Functions.PageSection.bind(this, States.page.Page6.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page6.S2),
				},
			},
			{
				"Page7": {
					"L7": Functions.List.bind(this, States.list.list7),
					"S1": Functions.PageSection.bind(this, States.page.Page7.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page7.S2),
				},
			},
			{
				"Page8": {
					"L8": Functions.List.bind(this, States.list.list8),
					"S1": Functions.PageSection.bind(this, States.page.Page8.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page8.S2),
				},
			},
			{
				"Page9": {
					"L9": Functions.List.bind(this, States.list.list9),
					"S1": Functions.PageSection.bind(this, States.page.Page9.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page9.S2),
				},
			},
			{
				"Page10": {
					"L10": Functions.List.bind(this, States.list.list10),
					"S1": Functions.PageSection.bind(this, States.page.Page10.S1),
					"S2": Functions.PageSection.bind(this, States.page.Page10.S2),
				},
			},

		];

		// ページのデータ設定
		this.allData = AllData(this.funcs);
	}

	render() {
		return (
			<div className="flex-box">

				{/* サイドエリア */}
				{this.state.menu === States.menu.hide}
				{this.state.menu === States.menu.show && (
					<Parts.Aside
						allData={this.allData}
						states ={this.state}
					/>
				)}

				{/* コンテンツエリア */}
				<div className="contents">

					{/* ヘッダーエリア */}
					<Parts.Header
						allData={this.allData}
						states={this.state}
						func={this.funcs[0].Menu}
					/>

					{/* メインエリア */}
					<main className="main">
						{/* コンテンツ(ページ)切替 */}
						<Router.Page
							allData={this.allData}
							states={this.state}
						/>
					</main>

				</div>
			</div>
		);
	}

}

export default Layout;
