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

		/***** state初期値設定 *****/
		this.state = {
			// ページ表示設定
			page: States.page.Top,
			 // サイドエリア表示設定
			menu: States.menu.hide,
			// サイドエリアの子リスト表示
			list: States.list.hide,
		};

		/***** sessionStorrage初期値設定(戻るボタン用) *****/
		// 現在のページのstateをセット
		for (var i = 1; i <= 5; i++) {
			sessionStorage.setItem('back' + i + 'Page', this.state.page);
		}
		// 戻るボタンを押した回数をセット
		sessionStorage.setItem('backCount', "1");

		/***** functionの初期値設定 *****/
		this.funcs = [
			{
				"Top": Functions.Page.bind(this, States.page.Top),
				"Menu": Functions.Menu.bind(this),
				"Back": Functions.Back.bind(this),
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
					"S3": Functions.PageSection.bind(this, States.page.Page3.S3),
					"S4": Functions.PageSection.bind(this, States.page.Page3.S4),
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

		/***** ページデータ設定 *****/
		this.allData = AllData(this.funcs);

		// URL設定
		const urlPath = [
			{
				path: "/",
				statePage: "0"
			},
			{
				path: "/page1/section1",
				statePage: "1S1"
			},
		];

		if (window.location.pathname === "/") {
			// 特に処理なし
		} else if (window.location.pathname === process.env.REACT_APP_PATH_NAME + "/Section1" || this.state.page === "1S1") {
			if (window.location.pathname !== process.env.REACT_APP_PATH_NAME + "/Section1"){
				window.location.pathname = process.env.REACT_APP_PATH_NAME + "/Section1"
			}
			if (this.state.page !== "1S1") {
				this.state.page = "1S1";
			}
		}
	}

	render() {
		return (
			<div className="flex-box">

				{/* サイドエリア */}
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
						func={this.funcs}
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
