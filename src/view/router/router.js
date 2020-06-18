import React from 'react';
import PageSample from '../pages/pageSample';
import Environment from '../pages/environment';
import EnvironmentM from '../pages/environmentManual';
import Top from '../pages/top';
import States from "../../config/states";

const Router = ({pages, states, route}) => {

	// ページの切替
	if (route === "page") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && <Top name={pages[0].name} />}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && <Environment title={pages[1].children[0].name} />}
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && <EnvironmentM title={pages[1].children[1].name} />}

				{/* 2. データ関連 */}
				{states.page === States.page.Page2 && <PageSample />}
			</>
		);
	}

	// ヘッダーのタイトルの切替
	else if (route === "header") {
		return (
			<>
				{/* Topページ */}
				{states.page === States.page.Top && pages[0].name}

				{/* 1. 環境構築ページ */}
				{/* Section1 */}
				{states.page === States.page.Page1.S1 && pages[1].children[0].name }
				{/* Section2 */}
				{states.page === States.page.Page1.S2 && pages[1].children[1].name }

				{/* 2. データ関連 */}
				{states.page === States.page.Page2 && pages[2].name }
			</>
		);
	} else {

	}

}

export default Router;
