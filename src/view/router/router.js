import React from 'react';

// 必要データのインポート
import States from "./../../config/states";
import Pages from "../../config/pages";
import LittleList from './../parts/littleList'

const Router = ({allData, states, route}) => {

	// ページの切替
	if (route === "page") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && <Pages.Top name={allData[0].name} />}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && <Pages.Environment title={allData[1].children[0].name} />}
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && <Pages.EnvironmentM title={allData[1].children[1].name} />}

				{/* 2. データ関連ページ */}
				{/* Section1 */}
				{states.page === States.page.Page2.S1 && <Pages.AboutState title={allData[2].children[0].name} />}
				{/* Section2 */}
				{states.page === States.page.Page2.S2 && <Pages.AboutProps title={allData[2].children[1].name} />}
				{/* Section3 */}
				{states.page === States.page.Page2.S3 && <Pages.AboutEnv title={allData[2].children[2].name} />}

			</>
		);
	}

	// ヘッダーのタイトルの切替
	else if (route === "header") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && allData[0].name}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && allData[1].children[0].name }
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && allData[1].children[1].name }

				{/* 2. データ関連ページ */}
				{/* Section1 */}
				{states.page === States.page.Page2.S1 && allData[2].children[0].name}
				{/* Section2 */}
				{states.page === States.page.Page2.S2 && allData[2].children[1].name}
				{/* Section3 */}
				{states.page === States.page.Page2.S3 && allData[2].children[2].name}
			</>
		);
	}

	// 子リストのセクション別切替作成
	else if (route === "littleList") {
		return (
		<>
			{console.log("LittleListRouter")}
			{/* 1. 環境構築の子リスト */}
			{allData.state.list === States.list1.name && states.list1 === States.list1.show && <LittleList listNeeds={allData} />}
			{/* 2. データ関連の子リスト */}
			{allData.state.list === States.list2.name && states.list2 === States.list2.show && <LittleList listNeeds={allData} />}
		</>
		);
	} else {

	}

}

export default Router;
